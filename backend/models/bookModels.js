import mongoose from "mongoose";

//Creates the scheam for the book database 
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please fill in a title"] //validate that they have entered a value 
}, 
  author:{
    type: String,
    required: [true, "Please fill in a Author"] //validate that they have entered a value 
},
  quantity: {
    type: String,
    required: [true, "Please fill in a Quantity and make sure it is a number"] //validate that they have entered a value 
},
  price: {
    type: String,
    required: [true, "Please fill in a price"] //validate that they have entered a value 
},
  photo: {
    type: String,
    default: "https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-workplace-your-profile-icon&density=1"
},
  
  
})
//Exports the scheama for the book database
export default mongoose.model("Book", bookSchema)
