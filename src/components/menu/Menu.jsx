import { useState } from "react";
import styled from "styled-components";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Navigation className={isActive ? "active" : ""}>
      <div className="menuToggle" onClick={handleClick}></div>
      <nav className="menu">
        <ul className="list">
          <li className="listItem">
            <a href="#" className="link" onClick={handleClick}>
              Inicio
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link" onClick={handleClick}>
              Productos
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link" onClick={handleClick}>
              Nosotros
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="link" onClick={handleClick}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
};

export default Menu;

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 50px;
  height: 50px;
  margin: 1rem;
  background-color: #fff; /* color de la parte superior del menu */
  border-radius: 10px;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: height 0.5s, width 0.5s;
  transition-delay: 0s, 0.5s;

  &.active {
    width: 100%;
    height: 360px;
    transition: width 0.5s, height 0.5s;
    transition-delay: 0s, 0.5s;

    @media (min-width: 992px) {
      width: 350px;
    }
  }

  .menuToggle {
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menuToggle::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: #999;
    transform: translateY(-10px);
    box-shadow: 0 10px #999;
    transition: 0.5s;
  }

  .menuToggle::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: #999;
    transform: translateY(10px);
    transition: 0.6s;
  }

  &.active .menuToggle::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 #999;
  }
  &.active .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
  }

  .menu {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    margin-top: 50px;
    border-top: 1px solid #999;
    background-color: #999;
  }

  .list {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .listItem {
    list-style: none;
  }

  .link {
    display: flex;
    align-items: center;
    margin: 20px 0;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
