import React from 'react';
import {motion} from 'framer-motion';
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';
import {Mail, Phone, Home, GetApp} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {GitHub, LinkedIn} from '@material-ui/icons';
import {ExternalLink} from 'react-external-link';
import './Contact.css'; 
function Contact() {

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v86446d', 'template_wonh4xq', e.target, 'user_QASgJ4J7Brk2dFXYkt6YW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    alert('Hi! Thanks for reaching out! I will get back to you ASAP!');
  }  
  return (
    <div className = 'contact' id = 'contact'>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <div className="contact__header">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact__container">
        <div className="about__contact">
          <div className="contact__info">
            <motion.img
              className = "contact__img"
              src = "/images/Sreejit De.jpeg"
              alt = "Sreejit De"
            />
            <div className="contact__infoLines">
              <div className="contact__infoLine">
                <Home fontSize = "large" className = "contact__icon"/>
                <p>Tamluk, West Bengal, India</p>
              </div>
              <div className="contact__infoLine">
                <Mail fontSize = "large" className = "contact__icon"/>
                <p>sreejitde7@gmail.com</p>
              </div>
              
              <div className="contact__social">
                <h3>Let's connect!</h3>
                <div className="contact__icons">
                <IconButton>
                <ExternalLink href = 'https://github.com/Sreejit7'>
                  <GitHub fontSize = "large" className = {`gh-icon ${ "light"}`}/>
                  </ExternalLink>
                </IconButton>
                <IconButton>
                  <ExternalLink href = 'https://www.linkedin.com/in/sreejit-de-64a84b190/'>
                    <LinkedIn fontSize = "large" className = {`li-icon ${ "light"}`}/>
                  </ExternalLink>
                </IconButton>
              </div>
            </div>
            </div>
          </div>
        </div>
        <form className = "contact__form" onSubmit = {sendMail}>
          <div className="contact__title">
            <h1>Drop A Message or Say Hi!</h1>
            <i class="em-svg em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>
          </div>
          <input type = "text" placeholder = "Type your name" className = "form__input" name = "name"/>
          <input type = "email" placeholder = "Type your email" className = "form__input" name = "email"/>
          <input type = "text" placeholder = "Type mail subject" className = "form__input" name = "subject"/>
          <textarea rows = "5" type = "text" placeholder = "Type your message" name = "message"></textarea>
          <input className = "form__submit" type = "submit" value = "Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
