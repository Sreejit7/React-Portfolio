import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import './Header.css';
import {NavHashLink as Link } from 'react-router-hash-link';
import {ExternalLink} from 'react-external-link';
import {Link as LinkR} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const ThemedHeader = styled.div`
  .header-scroll{
    background-color: ${({ theme }) => theme.headerBG};
  }
  h2 {
    color: ${({ theme }) => theme.textBG};
  }
  h2: hover{
    color: ${({ theme }) => theme.hover};
  }
  .header-z{
    z-index: 10;
  }
`;
const ThemedItems = styled.div`
  .link-selected{
    border-bottom: ${({ theme }) => `5px solid ${theme.headerItem}`};
    color: ${({ theme }) => theme.headerTextBG};
  } 
`
function Header({ section}) {
  const [sidebar, setSidebar] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      if(window.scrollY >= 80){
        setScrollNav(true);
      }
      else{
        setScrollNav(false);
      }
    };
  
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    }
  }, []);  

  return (
    <ThemedHeader>
    <motion.div 
      className = {`header ${scrollNav && "header-scroll"}`}
      initial = {{y: '-10vh'}}
      animate = {{y: 0}}
      transition = {{type: 'spring', stiffness: 100, delay: 0.45, duration: 0.5}}
    >
      <ThemedItems className="header__items">
        <Link 
          smooth to = '#about' 
          className = {`header__link ${section === "about" && "link-selected"}`}

        >
          <h2>About Me</h2>
        </Link>
        <Link 
          smooth to = '#skill' 
          className = {`header__link ${section === "skill" && "link-selected"}`}

        >
          <h2>Skills</h2>
        </Link>
        <Link 
          smooth to = '#project' 
          className = {`header__link ${section === "project" && "link-selected"}`}
          
        >
          <h2>Projects</h2>
        </Link>
        <ExternalLink href = 'https://drive.google.com/file/d/1lF9QU7aX0BX1MEk1yGh3WGRq2AXIUd6C/view?usp=sharing' className = "header__link">
          <h2>Resume</h2>
        </ExternalLink>
        <Link 
          smooth to = '#contact' 
          className = {`header__link ${section === "contact" && "link-selected"}`}
        >
          <h2>Contact Me</h2>
        </Link>
      </ThemedItems>
      <LinkR to = "#" onClick = {() => setSidebar(!sidebar)}>
      <ReorderIcon fontSize = "large" className = {`sidebar__icon`}/>
      </LinkR>
    </motion.div>
    
    
    <Sidebar sidebar = {sidebar} showSidebar = {() => setSidebar(!sidebar)}/>
  </ThemedHeader>
  )
}
export default Header
