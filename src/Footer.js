import React from 'react'
import './Footer.css';
import {GitHub, LinkedIn} from '@material-ui/icons';
import {ExternalLink} from 'react-external-link';


function Footer() {
  return (
    <div className = "footer" id = "footer">
      
      <div className="footer__desc">
        <span>Made with ❤️ by Sreejit De.</span>
        <span><h3>Let's connect!</h3></span>
      </div>
      <div className="footer__icons">
        <ExternalLink href = 'https://github.com/Sreejit7'><GitHub fontSize = "large" className = "icon-footer"/></ExternalLink>
        <ExternalLink href = 'https://www.linkedin.com/in/sreejit-de/'><LinkedIn fontSize = "large" className = "icon-footer"/></ExternalLink>
      </div>
      <span>All rights reserved &#x24B8; 2021</span>
    </div>
  )
}

export default Footer
