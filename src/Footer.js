import React from 'react'
import './Footer.css';
import {GitHub, LinkedIn} from '@material-ui/icons';
import {ExternalLink} from 'react-external-link';


function Footer() {
  return (
    <div className = "footer" id = "footer">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      
      <div className="footer__desc">
        <span>Made with <i class="em em-heart" aria-role="presentation" aria-label="HEAVY BLACK HEART"></i> by Sreejit De.</span>
        <span><h3>Let's connect!</h3></span>
      </div>
      <div className="footer__icons">
        <ExternalLink href = 'https://github.com/Sreejit7'><GitHub fontSize = "large" className = "icon-footer"/></ExternalLink>
        <ExternalLink href = 'https://www.linkedin.com/in/sreejit-de-64a84b190/'><LinkedIn fontSize = "large" className = "icon-footer"/></ExternalLink>
      </div>
      <span>All rights reserved &#x24B8; 2020</span>
    </div>
  )
}

export default Footer
