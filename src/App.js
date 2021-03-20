import React,{useState, useRef, useEffect} from 'react';
import { SunspotLoader } from 'react-awesome-loaders';
import './App.css';
import {motion} from 'framer-motion';
import {getDimensions} from './util';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {HashLink as HLink} from 'react-router-hash-link';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';
import {lightTheme, darkTheme} from './theme';
import styled, { ThemeProvider } from 'styled-components'
import Toggle from './Toggle';
function App() {
  const [visibleSection, setVisibleSection] = useState();
  const [topButton, setTopButton] = useState(false);
  const [downButton, setDownButton] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);


  const StyledName = styled.div`
    .intro-line2 h1{
      text-shadow: ${({ theme }) => `3px 3px 5px ${theme.textShadow}`};
    }
  `
  const TopButton = styled.div`
    &.toTop {
      background: ${({ theme }) => theme.topButtonBG};
    }
  `;
  const StyledAbout = styled(About)`
    background: ${({ theme }) => theme.oddSectionBG};
    color: ${({ theme }) => theme.headers};
  `;
  const StyledSkills = styled(Skills)`
    background:  ${({ theme }) => theme.evenSectionBG};
    color: ${({ theme }) => theme.headers};
    .skill__item {
      background: ${({ theme }) => theme.skillItemBG};
      box-shadow: ${({ theme }) => `2px 2px 2px 0px ${theme.boxShadow}`}; 
    }
  `;
  const StyledProjects = styled(Projects)`
    background: ${({ theme }) => theme.oddSectionBG};
    color: ${({ theme }) => theme.headers};
    .project__item {
      box-shadow: ${({ theme }) => `4px 4px 2px 0px ${theme.boxShadow}`}; 
    }
  `;
  const StyledContact = styled(Contact)`
    background:  ${({ theme }) => theme.evenSectionBG};
    color: ${({ theme }) => theme.headers};
    margin-bottom: -50px;
    padding-bottom: -10px;
  `;
  const sectionRefs = [
    { section: "about", ref: aboutRef },
    { section: "project", ref: projectRef },
    { section: "contact", ref: contactRef },
    {section: "skill", ref: skillRef}
  ];
  
  const toggleTheme = () => {
    let currTheme = theme === 'dark'? 'light': 'dark';
    setTheme(currTheme);
  }
  
  useEffect(() => {
    document.title = "Sreejit De  💻 | Web Developer, Software Engineering Aspirant";
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);

  useEffect(() => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const handleToTop = () => {
      if(window.scrollY + headerHeight >= aboutRef.current.offsetTop ){
        setTopButton(true);
      }
      else{
        setTopButton(false);
      }
      if(window.scrollY >= 10){
        setDownButton(false);
      }
      else{
        setDownButton(true);
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
    <ThemeProvider theme = {theme === 'dark'? darkTheme: lightTheme}>
    <>
    { loading?
      <SunspotLoader
      gradientColors={["#6366F1", "#E0E7FF"]}
      shadowColor={"#f7f7f7"}
      desktopSize={"128px"}
      mobileSize={"100px"}
    /> :
    <div className = {`app ${theme === 'light' && "light-theme"}`}>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <div className={`app__body`}>
      <motion.div className="app__header" ref = {headerRef}>
        <Header section = {visibleSection}/>
      </motion.div>
      
      <div className = {`app__intro ${theme === 'light' && "light-bg"}`}>
          
          <div className="app__intro__body">
            <motion.div className = {`intro__left`}
              
              initial = {{zoom: 0.25, opacity: 0, y: 0}}
              animate = {{zoom: 1, opacity: 1, y: 40}}
              transition = {{type: "tween", delay: 0.25, duration: 0.5}}
            > 
              <StyledName className="intro__details">
                <div className="intro-line1">
                <motion.h1 
                  style = {{fontSize: 35, marginRight: 10}} 
                >Hey there!</motion.h1>
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
                  
                </motion.p>
              </StyledName>
            </motion.div>
          </div>
          <HLink smooth to = "#about" className = {`bottom-icon ${downButton && "visible"} ${theme === 'light' && 'light'}`}>
            <ExpandMoreIcon fontSize = "large"/>
          </HLink>
        </div>
        <div className = 'about__section' ref = {aboutRef}>
        <StyledAbout/>
        </div>
        <div className="skills__section" ref = {skillRef}>
        <StyledSkills/>
        </div>
        <div className = 'projects__section' ref = {projectRef}>
        <StyledProjects/>
        </div>
        <div className = 'contact__section' ref = {contactRef}>
        <StyledContact/>
        </div>
        <TopButton className = {`toTop ${topButton && "visible"}`} id = '#top'>
          <HLink smooth to = '#top'>
          <IconButton>
            <ExpandLessIcon className = "toTopIcon"/>
          </IconButton>
          </HLink>
        </TopButton>
        <div >
        <Footer/>
        </div>
      </div>
    </div>}
    </>
    </ThemeProvider>
  );
}

export default App;
