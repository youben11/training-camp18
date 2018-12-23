import mongoose from "mongoose"
const Schema = mongoose.Schema

const DefiSchema = new Schema ({
    utilisateurId:{
        type:mixed
    },
    groupeId:{
        type:mixed
    },
    defi:{
        type:String
    }
    
})