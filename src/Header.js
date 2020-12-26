import React,{useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import Switch from './Switch';
import './Header.css';
import {HashLink as Link } from 'react-router-hash-link';
import {ExternalLink} from 'react-external-link';
import {Link as LinkR} from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import Sidebar from './Sidebar';
function Header({toggle, onToggle}) {
  const [sidebar, setSidebar] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 70){
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  };

  window.addEventListener('scroll', changeNav)

  return (
    <>
    <motion.div className = {`header ${toggle && "header-dark"} ${scrollNav && "header-scroll"}`}>
      <div className="header__items">
        <Link smooth to = '#about' className = "header__link ">
          <h2>About</h2>
        </Link>
        <Link smooth to = '#project' className = "header__link ">
          <h2>Projects</h2>
        </Link>
        <ExternalLink href = 'https://drive.google.com/file/d/1nln2EHepkQEKQfRpl0nOWjyI2TH_foD7/view?usp=sharing' className = "header__link">
          <h2>Resume</h2>
        </ExternalLink>
        <Link smooth to = '#contact' className = "header__link ">
          <h2>Contact Me</h2>
        </Link>
      </div>
      <motion.div className = "app__switch">
        <Switch isToggled = {toggle} onToggle = {onToggle}/>
      </motion.div>
      <LinkR to = "#" onClick = {() => setSidebar(!sidebar)}>
      <ReorderIcon fontSize = "large" className = {`sidebar__icon ${!toggle && "light"}`}/>
      </LinkR>
    </motion.div>
    
    
    <Sidebar sidebar = {sidebar} showSidebar = {() => setSidebar(!sidebar)}/>
  </>
  )
}
export default Header
