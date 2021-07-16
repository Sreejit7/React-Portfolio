import "./Sidebar.css";
import CloseIcon from "@material-ui/icons/Close";
import { sidebarItems } from "./SidebarItems";
import { HashLink as HLink } from "react-router-hash-link";
import { ExternalLink } from "react-external-link";
const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <div className="sidebar">
      <nav className={sidebar ? "sidebar__menu active" : "sidebar__menu"}>
        <ul className="sidebar__toggle" onClick={showSidebar}>
          <li>
            <CloseIcon fontSize="large" className="close__icon" />
          </li>
          {sidebarItems.map((item, index) => {
            const { external, link, name } = item;
            return (
              <li key={index} className="sidebar__text">
                {!external && (
                  <HLink smooth to={link}>
                    <span>{name}</span>
                  </HLink>
                )}
                {external && (
                  <ExternalLink href={link}>
                    <span>{name}</span>
                  </ExternalLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
