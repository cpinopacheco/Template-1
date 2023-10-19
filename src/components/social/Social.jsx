import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import MyCompany from "../../data/MyCompany";

const Social = () => {
  const { phone } = MyCompany;

  return (
    <Container>
      <p className="title">Siguenos en redes sociales</p>
      <div className="containerButtons">
        <div>
          <a
            href="https://www.facebook.com/cristian.pacheco.374/?locale=es_LA"
            target="blank"
            className="socialLink"
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/cristianapp87/"
            target="blank"
            className="socialLink"
          >
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
          </a>
        </div>
        <div>
          <a
            href="https://www.tiktok.com/@crispinop"
            target="blank"
            className="socialLink"
          >
            <FontAwesomeIcon icon={faTiktok} className="tik-tok" />
          </a>
        </div>
        <div>
          <a
            href={`https://api.whatsapp.com/send?phone=${phone}`}
            target="blank"
            className="socialLink"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Social;

const Container = styled.div`
  .containerButtons {
    display: flex;
  }

  .title {
    text-align: center;
    color: var(--tertiary-color);
  }

  .socialLink {
    position: relative;
    margin: 1rem 0.5rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border: none;
    transition: 0.5s;
    overflow: hidden;
    font-size: 1.5rem;
    color: #fff;
  }

  @media (min-width: 992px) {
    .socialLink:hover {
      transform: translateY(-20px);
    }
  }

  .socialLink::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background-color: var(--tertiary-color);
    transform: skewX(45deg) translateX(150px);
    transition: 0.8s ease;
  }

  .socialLink:hover::before {
    transform: skewX(45deg) translateX(-150px);
  }

  /* .facebook {
    color: rgba(10, 128, 236, 0.7);
  }
  .instagram {
    color: rgb(255, 121, 98);
  }
  .tik-tok {
    color: #000;
  }
  .whatsapp {
    color: #00e676;
  } */
`;
