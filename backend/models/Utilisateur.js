import mongoose from "mongoose"
const Schema = mongoose.Schema

const UtilisateurSchema = new Schema ({
    id:{
        type : String,
        required :"Id is required"
    },
    mdp:{
        type : String,
        required :"Password is required"
    },
    defi:{
        type:Array, 
        
    },
    toDoListe:{
        type:Array, 
    },
    photoDeProfil:{
        data:Buffer,
        contentType:String

    },
    confidentiabilite:{
        type:String,
        default:"public"

    },
    centreDinteret:{
        type:Array,
        required:"Centre d'interet is required"
    },
    rappel:{
        type:Array,
    }

}
)
export default UtilisateurSchema