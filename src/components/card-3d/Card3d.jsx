import styled from "styled-components";
import Card3dContent from "../../data/Card3dContent.js";

const Card3d = () => {
  return (
    <Container>
      {Card3dContent.map((item) => (
        <div key={item.id} className="card">
          <div className="box">
            <div className="imgBx">
              <img src={item.image} alt={`Imágen ${item.title}`} />
              <div className="seeMoreButton">Ver mas</div>
            </div>
            <div className="contentBx">
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Card3d;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;

  .card {
    position: relative;
    width: 300px;
    height: 450px;
    margin: 30px 0;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  @media (min-width: 576px) {
    .card {
      margin: 30px 50px;
    }
  }

  @media (min-width: 1600px) {
    .card {
      width: 350px;
      height: 500px;
      margin: 30px 60px;
    }
  }

  .seeMoreButton {
    position: absolute;
    bottom: 0;
    background-color: #999;
    width: 100%;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media (min-width: 992px) {
    .seeMoreButton {
      display: none;
    }
  }

  .card:hover .box {
    transform: rotateY(180deg);
  }

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s ease;
  }

  .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .contentBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    border-radius: 1rem;
    transform: rotateY(180deg);
  }

  .box .contentBx div {
    transform-style: preserve-3d;
    padding: 20px;
    background: #999;
    transform: translateZ(100px);
    border-radius: 1rem;
  }

  .contentBx div h2 {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 1px;
  }

  .contentBx div p {
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
  }
`;