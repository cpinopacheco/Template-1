import styled from "styled-components";

const MainButton = () => {
  return (
    <Button>
      <span>Click</span>
    </Button>
  );
};

export default MainButton;

const Button = styled.button`
  display: inline-block;
  font-weight: 600;
  width: 150px;
  height: 50px;
  margin: 1rem;
  border-radius: 40px;
  border: 1px solid #999;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  text-transform: uppercase;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  &::before {
    left: -10px;
    background: #333;
  }

  &::after {
    right: -10px;
    background: #999;
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }

  &:hover span {
    color: #fff;
    transition: 0.3s;
  }

  & span {
    color: #333;
    font-size: 1.3rem;
    transition: all 0.3s ease-in;
  }
`;
