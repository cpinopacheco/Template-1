import { useState } from "react";
import styled from "styled-components";

const Slide3d = () => {
  const [degrees, setDegrees] = useState(0);
  const [rotate, setRotate] = useState(false);

  const rotateStyle = {
    transform: `perspective(1000px) rotateY(${degrees}deg)`,
  };

  const prevClick = () => {
    setDegrees(degrees + 45);
    setRotate(true);
  };

  const nextClick = () => {
    setDegrees(degrees - 45);
    setRotate(true);
  };

  return (
    <SliderContainer>
      <Container>
        <Box style={rotate ? rotateStyle : null}>
          <Span $index={1}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={2}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={3}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={4}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={5}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={6}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={7}>
            <Image src="https://placehold.co/200x200" />
          </Span>
          <Span $index={8}>
            <Image src="https://placehold.co/200x200" />
          </Span>
        </Box>
        <Buttons>
          <ButtonPrev className="btn-prev" onClick={prevClick}></ButtonPrev>
          <ButtonNext className="btn-next" onClick={nextClick}></ButtonNext>
        </Buttons>
      </Container>
    </SliderContainer>
  );
};

export default Slide3d;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  transform-style: preserve-3d;
  margin: 1rem;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  transition: 1.5s;
  transform: perspective(1000px) rotateY(0deg);
`;

const Span = styled.span`
  --i: ${(props) => props.$index || 1};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
  /* -webkit-box-reflect: below 0px linear-gradient(transparent, #0002); */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 50px;

  & > div {
    cursor: pointer;
    position: relative;
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:active {
    background: #fff;
  }
  & > div:active::before {
    border-top: 3px solid #000;
    border-right: 3px solid #000;
  }

  & > div::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg) translate(-2.5px, 2.5px);
  }

  .btn-prev::before {
    transform: rotate(225deg) translate(-2.5px, 2.5px);
  }
`;

const ButtonPrev = styled.div``;

const ButtonNext = styled.div``;
