import React,{useState, useRef, useEffect} from 'react';
import './App.css';
import Header from './Header';
import {motion} from 'framer-motion';
import {getDimensions} from './util';
import IconButton from '@material-ui/core/IconButton';
import {GitHub, LinkedIn} from '@material-ui/icons';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {ExternalLink} from 'react-external-link';
import {HashLink as HLink} from 'react-router-hash-link';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';


function App() {
  const [isToggled, setIsToggled] = useState(true);
  const [visibleSection, setVisibleSection] = useState();
  const [topButton, setTopButton] = useState(false);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);
  const sectionRefs = [
    { section: "about", ref: aboutRef },
    { section: "project", ref: projectRef },
    { section: "contact", ref: contactRef },
    {section: "skill", ref: skillRef}
  ];
  const refs = {
    about: {aboutRef},
    project: {projectRef},
    contact: {contactRef},
    skill: {skillRef}
  };
  useEffect(() => {
    document.title = "Sreejit De  💻";
  }, [])
  useEffect(() => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const handleToTop = () => {
      if(window.scrollY + headerHeight >= aboutRef.current.offsetTop ){
        setTopButton(true);
      }
      else{
        setTopButton(false);
      }
    };
    handleToTop();
    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        if(ref){
          const ele = ref.current;          
          if (ele) {
            const { offsetBottom, offsetTop } = getDimensions(ele);
            return scrollPosition > offsetTop && scrollPosition < offsetBottom;
          }
        }
      });
  
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };  
    handleScroll();
    window.addEventListener('scroll', handleToTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [visibleSection]);

  //console.log(visibleSection);

  return (
    <>
    <div className={`app__body ${isToggled && "app-dark"}`}>
    <motion.div className="app__header" ref = {headerRef}>
      <Header 
        toggle = {isToggled} 
        onToggle = {() => setIsToggled(!isToggled)}
        section = {visibleSection}
        refs = {refs}
      />
    </motion.div>
    
    <div className = {`app__intro ${!isToggled && "app__intro-light"}`}>
        
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
        <div className="app__intro__body">
          <motion.div className = {`intro__left ${!isToggled && "light"}`}
            
            initial = {{zoom: 0.25, opacity: 0, y: 0}}
            animate = {{zoom: 1, opacity: 1, y: 40}}
            transition = {{type: "tween", delay: 0.25, duration: 0.5}}
          > 
            <div className="intro__details">
              <div className="intro-line1">
              <motion.h1 
                style = {{fontSize: 35, marginRight: 10}} 
              >Hey there!</motion.h1> <i class="em-svg em-wave" aria-role="presentation" aria-label="WAVING HAND SIGN"></i>
              <h1 style = {{marginLeft: '10px'}}>I'm</h1>
              </div>
              <div className="intro-line2">
                <motion.h1>Sreejit De<span className = "dot">.</span></motion.h1>
              </div>
              
              <motion.p 
                className = "intro__desc"
                animate = {{y: 0}}
              >
                <b style = {{marginRight: '10px', fontSize: '35px'}}>Welcome to my space!</b>
                <i class="em em-smile" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH AND SMILING EYES"></i>
              </motion.p>
            </div>
            {/*<div className="intro__icons">
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
              
            </div>*/}
          </motion.div>
        </div>
      </div>
      <div className = 'about__section' ref = {aboutRef}>
      <About />
      </div>
      <div className="skills__section" ref = {skillRef}>
      <Skills/>
      </div>
      <div className="coffee__break">
        
      </div>
      <div className = 'projects__section' ref = {projectRef}>
      <Projects/>
      </div>
      <div className = 'contact__section' ref = {contactRef}>
      <Contact/>
      </div>
      <div className = {`toTop ${topButton && "visible"}`} id = '#top'>
        <HLink smooth to = '#top'>
        <IconButton>
          <ExpandLessIcon className = "toTopIcon"/>
        </IconButton>
        </HLink>
      </div>
      <div >
      <Footer/>
      </div>
    </div>
    
    </>
  );
}

export default App;
