import styled from "styled-components";
import image from "./assets/image.jpg";
import imageMobile from "./assets/imageMobile.jpg";

const BannerTwo = () => {
  return (
    <Container>
      <div className="banner">
        <div className="imgBg"></div>
        <h2 className="title">Mensaje Importante</h2>
      </div>
    </Container>
  );
};

export default BannerTwo;

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
    opacity: 0.4;

    background-image: url(${imageMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 992px) {
      background-image: url(${image});
    }
  }

  .title {
    position: absolute;
    text-align: center;
    font-size: 3rem;
    color: #fff;
  }

  @media (min-width: 992px) {
    .title {
      font-size: 4rem;
    }
  }

  /* efecto degradado a la segunda sección */
  .banner::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 350px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  .banner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    z-index: 1;
    background: linear-gradient(to bottom, #111, transparent);
  }
`;
