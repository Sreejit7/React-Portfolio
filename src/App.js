import React,{useState, useRef} from 'react';
import './App.css';
import Header from './Header';
import {motion} from 'framer-motion';

import IconButton from '@material-ui/core/IconButton';
import {GitHub, LinkedIn} from '@material-ui/icons';
import {ExternalLink} from 'react-external-link';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  const [isToggled, setIsToggled] = useState(true);
  

  return (
    <>
    <div className={`app__body ${isToggled && "app-dark"}`}>
    <Header 
          toggle = {isToggled} 
          onToggle = {() => setIsToggled(!isToggled)}
    />
    <div className = {`app__intro ${!isToggled && "app__intro-light"}`}>
        
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
        <div className="app__intro__body">
          <motion.div className = {`intro__left ${!isToggled && "light"}`}
            initial = {{y: '-100vh'}}
            animate = {{y: 30}}  
            transition = {{type: "spring", stiffness: 150, delay: 0.25, duration: 0.15}}
          > 
            <div className="intro__details">
              <motion.h1 style = {{fontSize: 35, marginLeft: 10}}>Hello, I'm</motion.h1>
              <motion.h1 style = {{fontSize: 70, marginLeft: 10}}>Sreejit De.</motion.h1>
              <motion.p 
                className = "intro__desc"
                animate = {{y: 20}}
              >
                <span>I'm a final year Bachelor of Technology student in Computer Science & Technology. </span> <br/>
                <span>I have immense interest in Problem Solving & Web Development. </span><br/> 
                <span>I love learning new technologies, building new websites & improving my skills.</span><br/>
                Currently looking for SDE internship and/or Full-time roles! <br/>
                <span><b style = {{marginRight: '10px',marginTop: '10px'}}>Welcome to my website!</b><i class="em em-smile" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH AND SMILING EYES"></i></span>
              </motion.p>
            </div>
            <div className="intro__icons">
              <IconButton>
              <ExternalLink href = 'https://github.com/Sreejit7'>
                <GitHub fontSize = "large" className = {`gh-icon ${!isToggled && "light"}`}/>
                </ExternalLink>
              </IconButton>
              <IconButton>
                <ExternalLink href = 'https://www.linkedin.com/in/sreejit-de-64a84b190/'>
                  <LinkedIn fontSize = "large" className = {`li-icon ${!isToggled && "light"}`}/>
                </ExternalLink>
              </IconButton>
              
            </div>  
          </motion.div>
        </div>
      </div>
      <div className = 'about__section'>
      <About />
      </div>
      <div className = 'projects__section'>
      <Projects/>
      </div>
      <div className = 'contact__section'>
      <Contact/>
      </div>
      <div >
      <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;
