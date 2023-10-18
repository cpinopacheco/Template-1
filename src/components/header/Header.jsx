import styled from "styled-components";
import logo from "./assets/logo.png";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo" />
        <div className="content">
          <Menu></Menu>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  position: absolute;
  z-index: 3;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100px;
    margin: 1rem;
    @media (min-width: 1600px) {
      width: 140px;
    }
  }

  .content {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    top: 0px;
    max-width: 1800px;
  }

  @media (min-width: 1600px) {
    .content {
      top: 25px;
    }
  }
`;
