import mongoose from "mongoose";


 
const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  quantity: Number,
  price: String,
  photo: {
    type: String,
    default: "https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-workplace-your-profile-icon&density=1"
},
  
  
})

export default mongoose.model("Book", bookSchema)
