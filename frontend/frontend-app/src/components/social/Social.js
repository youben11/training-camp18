import React, { Component } from 'react'
import './Social.css'
import fbLogo from '../../assets/icons/facebook-logo.png'
import isLogo from '../../assets/icons/instagram-logo.png'
import twLogo from '../../assets/icons/twitter-logo.png'
import gmaillogo from '../../assets/icons/gmail-logo.png'

class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul>
                    <li>
                        <a target="_blanc" href="https://web.facebook.com">
                            <img src={fbLogo} alt="facebook-logo"/>
                        </a>
                    </li>
                    
                    <li>
                        <a target="_blanc" href="https://twitter.com">
                            <img src={twLogo} alt="twitter-logo"/>
                        </a>
                    </li>



                    <li>
                        <a target="_blanc" href="https://gmail.com">
                            <img src={gmaillogo} alt="twitter-logo"/>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Social