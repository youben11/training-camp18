import React,{Component} from 'react' ;
import bgg from "../assets/weinspire.png"
import logo from "../assets/logo.png"
import we from "../assets/we.png"
//import Singup from './Singup.js'
class Login2 extends Component
{
  constructor(props)
  {
   super(props) ;
   this.state={
       error : 0 ,
       u_name:"" ,
       u_pass:"" ,
       is_loggedin : false,
       theme : "normal"
   }
}

    render()
    {
        return(
              <form   className=" uk-align-center" style={pos_form}>
               <h2 style={{position:"relative",left:"150px",bottom:"40px",color:"white"}}>SIGN IN</h2>
                <div style={{position:"relative",bottom:"30px"}}>
                 <div className="uk-margin" style={{backgroundColor:"black",width:"300px",marginRight:"200px",position:"relative",left:"50px",color:"black"}}>
                 <input className="uk-input" type="text" placeholder="Nom d'utilisation" onChange={(e)=>this.setState({u_name:e.target.value})}></input>
                 </div>
                 <div className="uk-margin" style={{backgroundColor:"black",width:"300px",marginRight:"200px",position:"relative",left:"50px",color:"black"}}>
                 <input className="uk-input"  type="password"   placeholder="Password" onChange={(e)=>this.setState({u_pass:e.target.value})}></input>
                </div>
               </div>
               <div>
               <label style={{color:"white",position:"relative",left:"20px"}}><input class="uk-checkbox" type="checkbox" /> Remember me next time</label>
                <input type="submit" class="uk-button uk-button-secondary" style={{position:"relative",width:"150px",left:"50px"}} value="Connexion"></input>

               </div>
               <div style={{backgroundColor:"#03476B",height:"350px",width:"900px",position:"relative",bottom:"322px",right:"900px",opacity:"0.8"}}>
               <img src={logo} width="300px" style={{position:"relative",left:"300px",bottom:"60px"}} />
                <img src={bgg} width="500px" style={{position:"relative",top:"70px",right:"80px"}} />
                <img src={we} width="500px" style={{position:"relative",bottom:"100px",left:"220px"}} />
                </div>
             </form>

        )
    }
}

const pos_form=
{
    width : "400px",
    position:"relative",
    top : "150px",
    left:"400px" ,
     backgroundColor: 'rgba(0, 0, 0, 0.4)' ,
    height:"250px",
    paddingTop:"100px",

}
export default Login2 ;
