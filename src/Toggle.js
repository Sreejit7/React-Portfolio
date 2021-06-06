import React from "react";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "./icons/moon.svg";
import { ReactComponent as SunIcon } from "./icons/sun.svg";
const ToggleContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 15;
  border: 2px solid #000;
  top: 1%;
  left: 2%;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  padding: 5px;
  transition: 0.4s;
  animation: 2.5s lazy-load ease-in;
  @keyframes lazy-load {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: #f6f9ff80;
    color: #000;
    text-align: center;
    border-radius: 6px;
    border: 0.2px solid black;
    padding: 5px 0;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }
  :hover .tooltip-text {
    visibility: visible;
  }
  :hover {
    transform: scale(0.9);
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  const message =
    theme === "light"
      ? "Fancy entering a dark room?"
      : "Let the windows open, the sun is rising!";
  return (
    <ToggleContainer onClick={toggleTheme}>
      {!isLight && (
        <div>
          <SunIcon />
          <span className="tooltip-text">{message}</span>
        </div>
      )}
      {isLight && (
        <div>
          <MoonIcon />
          <span className="tooltip-text">{message}</span>
        </div>
      )}
    </ToggleContainer>
  );
};
export default Toggle;
