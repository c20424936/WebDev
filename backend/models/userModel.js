import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill in a name"] //validate that they have entered a value 
    },
    email: {
        type: String,
        required: [true, "Please fill in a email"] ,//validate that they have entered a value
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //This line will validate that the email is not fake 
            "Please enter a valid email"
        ]
    },
    gender: {
        type: String,
        required: [true, "Select a gender "], //validate that they have entered a value 
        //minlength: [6, "Password is too short needs 6 carachters"],
        //maxlength: [30, "Password is too long needs to be less then 30 carachters"],
    },
    pass: {
        type: String,
        required: [true, "Select a password "], //validate that they have entered a value 
        minlength: [6, "Password is too short needs 6 carachters"],
        //maxlength: [30, "Password is too long needs to be less then 30 carachters"],
    },
    photo: {
        type: String,
        required: [true, "Please fill in a photo"], //validate that they have entered a value 
        default: "https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-workplace-your-profile-icon&density=1"
    },
    phone: {
        type: String,
        default: "+353"
    }

}, {
    timestamps: true
});

//Encrypt the password before it is entered in the database
userSchema.pre("save", async function(next){
    
    //check if the password is modified to make sure it doesnt get double encrypted and to exit the function
    if(!this.isModified("password")){
        return next()
    }

    //Hash the password 
    const hash = await bcrypt.genSalt(10) 
    //hash this password in the schema
    const hashedPassword = await bcrypt.hash(this.password, hash)
    this.password = hashedPassword
    //exit the function
    next()

})

export default  mongoose.model("User", userSchema)
