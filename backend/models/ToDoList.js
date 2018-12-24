import mongoose from "mongoose"
const Schema = mongoose.Schema

const ToDoListSchema = new Schema ({
    utilisateurId:{
        type:String
    },
    groupeId:{
        type:String
    },
    toDoList:{
        type:String
    }
    
})
export default ToDoListSchema