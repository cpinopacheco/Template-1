import { useState } from "react";
import styled from "styled-components";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    console.log(section);

    if (section) {
      const offset = 30;
      section.style.marginTop = `-${offset}px`;
      section.scrollIntoView({ behavior: "smooth" });
      section.style.marginTop = "0";
    }

    setIsActive(!isActive);
  };

  return (
    <Navigation className={isActive ? "active" : ""}>
      <div className="menuToggle" onClick={menuToggle}></div>
      <nav className="menu">
        <ul className="list">
          <li className="listItem">
            <button className="link" onClick={() => scrollToSection("inicio")}>
              Inicio
            </button>
          </li>
          <li className="listItem">
            <button
              className="link"
              onClick={() => scrollToSection("nosotros")}
            >
              Nosotros
            </button>
          </li>

          <li className="listItem">
            <button
              className="link"
              onClick={() => scrollToSection("catalogo")}
            >
              Catálogo
            </button>
          </li>
          <li className="listItem">
            <button
              className="link"
              onClick={() => scrollToSection("contacto")}
            >
              Contacto
            </button>
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
    height: 390px;
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
    background: var(--tertiary-color);
    transform: translateY(-10px);
    box-shadow: 0 10px var(--tertiary-color);
    transition: 0.5s;
  }

  .menuToggle::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 2px;
    background: var(--tertiary-color);
    transform: translateY(10px);
    transition: 0.6s;
  }

  &.active .menuToggle::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 var(--tertiary-color);
  }
  &.active .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
  }

  .menu {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    margin-top: 50px;
    border-top: 1px solid var(--tertiary-color);
    background-color: var(--tertiary-color);
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
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
