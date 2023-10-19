import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import myCompany from "../../data/MyCompany.js";
import styled from "styled-components";
import PropTypes from "prop-types";

const SaleCard = ({ item }) => {
  const [url, setUrl] = useState("");
  const { image, name, description, price } = item;
  const { phone } = myCompany;
  const defaultMessage = `Hola, me interesa el producto "${name}". ¿Sigue estando disponible?`;

  const sendMessage = () => {
    console.log("click");
    setUrl(
      `https://api.whatsapp.com/send?phone=${phone}&text=${defaultMessage}`
    );
  };

  return (
    <Container>
      <div className="card">
        <img src={image} alt={`Imágen ${name}`} className="image" />
        <h2 className="titleCard">{name}</h2>
        <div className="description">{description}</div>
        <p className="price">{`$ ${price}`}</p>
        <p className="wspMessage">
          <FontAwesomeIcon icon={faWhatsapp} className="iconWsp" />
          Envíe un mensaje al vendedor
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="button"
          onClick={sendMessage}
        >
          Enviar
        </a>
      </div>
    </Container>
  );
};

export default SaleCard;

const Container = styled.div`
  .card {
    background-color: var(--secondary-color);
    border-radius: 0.5rem 2rem;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
    padding: 1rem;
  }

  @media (min-width: 576px) {
    .card {
      width: 300px;
    }
  }

  .image {
    width: 100%;
    border-radius: 0.5rem 2rem;
  }

  .titleCard {
    color: var(--text-color);
    text-align: center;
    text-transform: uppercase;
  }

  .description {
    margin: 0.5rem;
    color: var(--text-color);
  }

  .price {
    color: #e6e349;
    text-align: center;
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .iconWsp {
    width: 0.9rem;
    height: 0.9rem;
    background-color: #00e676;
    color: #fff;
    padding: 0.25rem;
    border-radius: 50%;
    margin-right: 0.4rem;
  }

  .wspMessage {
    display: flex;
    justify-content: center;
    align-items: end;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }

  .button {
    display: block;
    background-color: var(--tertiary-color);
    border-radius: 0.5rem 2rem;
    color: var(--text-color);
    font-size: var(--subtitle-size);
    text-decoration: none;
    padding: 0.7rem 0;
    margin: 0.3rem 0;
    transition: all 0.5s ease;
    text-overflow: ellipsis;
    backdrop-filter: blur(0.1rem);
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0px 4px 8px #222;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .button:hover {
    transform: perspective(100px) translateX(10px) rotateX(0deg) rotateY(3deg)
      scale(1);
  }
`;

SaleCard.propTypes = {
  item: PropTypes.object,
};
