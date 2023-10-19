import styled from "styled-components";
import imageMobile from "./assets/imageMobile.jpg";
import imageDesktop from "./assets/imageDesktop.jpg";
import MyCompany from "../../data/MyCompany.js";

const BannerOne = () => {
  const { name } = MyCompany;

  return (
    <Container>
      <div className="banner">
        <div className="imgBg"></div>
        <div className="content">
          <h2 className="title">Mensaje Importante</h2>
          <p className="subtitle">
            Te invitamos a explorar nuestra colección de joyas excepcionales y
            descubrir por qué <b>{name}</b> es el destino de elección para
            quienes buscan belleza, calidad y elegancia en cada joya que llevan.
            Gracias por elegirnos para ser parte de tus momentos más preciados.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BannerOne;

const Container = styled.div`
  .banner {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner .imgBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.2;

    background-image: url(${imageMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 992px) {
      background-image: url(${imageDesktop});
    }
  }

  .content {
    position: absolute;
    text-align: center;
    z-index: 2;
    width: 90%;
  }

  .title {
    font-size: var(--title-size);
    color: var(--text-color);
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    .title {
      font-size: var(--title-size-lg);
    }
  }

  .subtitle {
    font-size: var(--subtitle-size);
    color: var(--text-color);
  }

  @media (min-width: 992px) {
    .subtitle {
      width: 60%;
      margin: auto;
    }
  }

  /* efecto degradado a la segunda sección */
  .banner::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  .banner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    z-index: 1;
    background: linear-gradient(to bottom, #111, transparent);
  }
`;
