import mongoose from "mongoose"
const Schema = mongoose.Schema

const GroupeSchema = new Schema ({
    administrateurIds:{
        type: mixed, //or mixed
        required:"Administrateur id is re"
    },
    membreIds:{
        type:mixed,
    },
    defis:{
        type:Array,
    },
    objectifs:{
        type:Array,
    },
    confidentialite:{
        type:String,
        default:public
    }
})