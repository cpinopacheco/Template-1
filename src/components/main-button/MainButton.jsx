import styled from "styled-components";

const MainButton = () => {
  return <Button>call to action</Button>;
};

export default MainButton;

const Button = styled.button`
  display: inline-block;
  background-color: var(--tertiary-color);
  border: none;
  border-radius: 0.5rem 2rem;
  color: var(--text-color);
  font-size: var(--subtitle-size);
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  margin: 1rem 0;
  transition: all 0.5s ease;
  text-overflow: ellipsis;
  backdrop-filter: blur(0.1rem);
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0px 8px 12px #333;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: perspective(100px) translateX(10px) rotateX(0deg) rotateY(3deg)
      scale(1);
  }
`;
