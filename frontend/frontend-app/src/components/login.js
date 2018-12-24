import React ,{Component} from 'react';
import Subscribe from './subscribe.js'
 class Login extends Component{
constructor(props)
{ super(props);
     this.state=
 {   email:"",
    username:"",
    password:"",
    confpswd:"",
    submitted:false,
    phone:""
   
 };

}
render()
{  const {username,password,confpwd }=this.state

    return(
    
        <form className='uk-align-center'  style={small_form}>
         <div  className="uk-margin" >
         
         <label>
            <input type='email'  className="uk-input "  style={{marginTop:"5px"}} placeholder="Your email"  name='email' onChange= {(e)=>this.setState({email:e.target.value})} required/>  </label>
            <input className="uk-input  " style={{marginTop:"5px"}}
             type="text" placeholder="User Name" name="username" value={username}  onChange={(e)=>this.setState({username:e.target.value})} />

           <input  className="uk-input " style={{marginTop:"5px"}}   type='number' onChange= {(e)=>this.setState({phone:e.target.value})} placeholder="Your phone number"  />
            <input  className="uk-input " style={{marginTop:"5px"}}  type="password" placeholder="password" name="password" value={password}  onChange={(e)=>this.setState({password:e.target.value})} />

             <input  className="uk-input " style={{marginTop:"5px"}}  type="password" placeholder="Confirm your password" name="confpswd" value={confpwd}  onChange={(e)=>this.setState({confpwd:e.target.value})} />
             <label><input class="uk-checkbox" type="checkbox" checked  /> <span style={{color:"white"}}> Accepet TERMS AND CONDIONTS </span> </label>

           
        </div>
        <Subscribe></Subscribe>
        </form>
  

     )
     

 }}
 const small_form={//devient un objet dnc :
    width:"400px"
}
 
 export default Login;