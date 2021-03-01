import React from 'react'
import './Sidebar.css';
import CloseIcon from '@material-ui/icons/Close';
import {sidebarItems} from './SidebarItems';
import {HashLink as HLink} from 'react-router-hash-link';
import {ExternalLink} from 'react-external-link';
const Sidebar = ({sidebar, showSidebar}) => {
  
  return (
    <div className = 'sidebar'>
      <nav className = {sidebar? 'sidebar__menu active':'sidebar__menu'}>
        <ul className = 'sidebar__toggle' onClick = {showSidebar}>
          <li>
            <CloseIcon fontSize = 'large' className = 'close__icon'/>
          </li>
          {
            sidebarItems.map((item, index) => {
              return(
                <li key = {index} className = 'sidebar__text'>
                  {item.name !== 'RESUME' &&
                    <HLink smooth to = {item.link}>
                      <span>{item.name}</span>
                    </HLink>
                  }
                  {item.name === 'RESUME' &&
                    <ExternalLink href = {item.link}>
                      <span>{item.name}</span>
                    </ExternalLink>
                  }
                </li>
              );
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
