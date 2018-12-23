import React ,{Component} from 'react'
// import Logo from '../../assets/icons/logo.png'
// import serach from '../../assets/icons/search-logo.png'
import './nav.css'

class Nav extends Component{
 render(){

    return(
        <nav className="uk-navbar-container uk-margin" uk-navbar>

        <div         className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#"><img  className=" logo" src={Logo} alt="App-logo"/></a>
        <ul className="uk-navbar-nav">
            <li>
                <a href="#">

                    Features
                </a>
            </li>
        </ul>
        <div className="uk-navbar-item">
            <div>Some </div>
        </div>
        <div className="uk-navbar-item"  >
    <form className="f"   action="javascript:void(0)">

    <input   className= "uk-input uk-form-width-small"  type="text" placeholder="SEARCH"  />


     <a href=" " ><img  className="ls" src={serach} alt="seach-logo"/></a>


    </form>


        </div>

        </div>

        </nav>


    )
}
}
export default Nav;
