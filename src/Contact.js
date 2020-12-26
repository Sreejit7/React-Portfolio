import React from 'react';
import {motion} from 'framer-motion';
import emailjs from 'emailjs-com';
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
      <div className="contact__title">
        <h1>Drop A Message or Say Hi!</h1>
        <i class="em-svg em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>
      </div>
      <div className="contact__container">
        <form className = "contact__form" onSubmit = {sendMail}>
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
