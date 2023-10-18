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
  width: 120px;
  height: 40px;
  margin: 1rem;
  border-radius: 40px;
  border: 1px solid var(--tertiary-color);
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
    left: -9px;
    background: var(--secondary-color);
  }

  &::after {
    right: -9px;
    background: var(--tertiary-color);
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
    color: var(--secondary-color);
    font-size: 1.1rem;
    transition: all 0.3s ease-in;
  }
`;
