import styled from "styled-components";
import Social from "../../social/Social";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../header/assets/Logo.png";
import MyCompany from "../../../data/MyCompany.js";

const Contact = () => {
  const { phone, mail } = MyCompany;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container id="contacto">
      <img src={logo} alt="Logo" className="logo" onClick={scrollToTop} />
      <p className="content">
        Estamos aquí para ayudarte a encontrar la joya perfecta para ti o para
        esa persona especial en tu vida. No dudes en ponerte en contacto con
        nosotros si tienes alguna pregunta o solicitud.
      </p>
      <div className="itemsContainer">
        <a href={`tel:+${phone}`} className="item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          +56957409074
        </a>
        <a href={`mailto:${mail}`} className="item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          cpinopacheco64@gmail.com
        </a>
      </div>
      <Social></Social>
    </Container>
  );
};

export default Contact;

const Container = styled.section`
  display: grid;
  place-items: center;
  gap: 1.5rem;
  text-align: center;
  margin: 8rem 2rem;
  margin-bottom: 2rem;

  .itemsContainer {
    display: flex;
    flex-direction: column;
  }
  .logo {
    width: 150px;
    cursor: pointer;
  }

  .content {
    color: var(--tertiary-color);
    font-size: var(--subtitle-size);
  }

  @media (min-width: 992px) {
    .content {
      width: 60%;
    }
  }

  .item {
    display: inline-block;
    color: var(--tertiary-color);
    margin: 0.5rem 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  .item:hover {
    color: var(--text-color);
  }

  .icon {
    margin-right: 0.5rem;
  }
`;
