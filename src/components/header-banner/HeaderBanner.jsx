import styled from "styled-components";
import imageBanner from "./assets/image1.jpg";
import imageBannerMobile from "./assets/image1Mobile.jpg";
import MainButton from "../main-button/MainButton";
import MyCompany from "../../data/MyCompany.js";

const HeaderBanner = () => {
  const { name } = MyCompany;

  return (
    <Container>
      <div className="banner">
        <div className="imgBg"></div>
        <div className="content">
          <h2 className="title">Explora la Belleza de las Joyas</h2>
          <p className="subtitle">
            En <b>{name}</b>, te invitamos a explorar un mundo de elegancia y
            belleza atemporal. Nuestra pasión por las joyas de alta calidad se
            refleja en cada uno de nuestro productos.
          </p>
          <MainButton></MainButton>
        </div>
      </div>
    </Container>
  );
};

export default HeaderBanner;

const Container = styled.div`
  .banner {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* efecto degradado a la sección */
  .banner::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  .imgBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;

    background-image: url(${imageBannerMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 992px) {
    .imgBg {
      background-image: url(${imageBanner});
    }
  }

  .content {
    position: relative;
    text-align: center;
    z-index: 2;
  }

  @media (min-width: 1400px) {
    .content {
      max-width: 60%;
    }
  }

  .title {
    color: var(--text-color);
    font-size: var(--title-size);
    text-transform: uppercase;
    padding: 0 1rem;
  }

  @media (min-width: 992px) {
    .title {
      font-size: var(--title-size-lg);
    }
  }

  .subtitle {
    padding: 0 2rem;
    font-size: var(--subtitle-size);
    color: var(--text-color);
  }

  @media (min-width: 992px) {
    .subtitle {
      width: 70%;
      margin: 2rem auto;
    }
  }
`;
