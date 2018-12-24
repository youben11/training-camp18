import mongoose from "mongoose"
const Schema = mongoose.Schema

const GroupeSchema = new Schema ({
    administrateurIds:{
        type: String, //or String
        required:"Administrateur id is required"
    },
    membreIds:{
        type:String,
    },
    defis:{
        type:Array,
    },
    objectifs:{
        type:Array,
    },
    confidentialite:{
        type:String,
        default:"public"
    }
})
export default GroupeSchema