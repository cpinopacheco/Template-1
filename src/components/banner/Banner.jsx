import styled from "styled-components";
import imageBanner from "./assets/image1.jpg";
import imageBannerMobile from "./assets/image1Mobile.jpg";
import MainButton from "../main-button/MainButton";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="imgBg"></div>
        <div className="content">
          <h2>Título Importante</h2>
          <p>
            Descripción: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Laudantium corporis dolor totam optio neque dolores
            reprehenderit, assumenda sed impedit id quis sapiente itaque saepe
            perferendis maiores explicabo ad vero tempore?
          </p>
          <MainButton></MainButton>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

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
    height: 300px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  .banner .imgBg {
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

    @media (min-width: 992px) {
      background-image: url(${imageBanner});
    }
  }

  .banner .content {
    position: relative;
    max-width: 80%;
    text-align: center;

    @media (min-width: 1400px) {
      max-width: 50%;
    }
  }

  .banner .content h2 {
    color: var(--text-color);
    font-size: 3rem;

    @media (min-width: 992px) {
      font-size: 5rem;
    }
  }

  .banner .content p {
    color: var(--text-color);
    font-size: 1.2rem;
  }
`;
