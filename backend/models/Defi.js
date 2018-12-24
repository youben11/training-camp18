import mongoose from "mongoose"
const Schema = mongoose.Schema

const DefiSchema = new Schema ({
    idDefi:{
        type:String
    },
    utilisateurId:{
        type:String
    },
    groupeId:{
        type:String
    },
    defi:{
        type:String
    }
    
})
export default DefiSchema