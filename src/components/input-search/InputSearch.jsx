import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputSearch = ({ handleSearch }) => {
  return (
    <Container>
      <div className="mainBox">
        <input
          className="searchInput"
          placeholder="Buscar producto"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </div>
    </Container>
  );
};

export default InputSearch;

const Container = styled.div`
  display: flex;
  justify-content: center;

  .mainBox {
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 100px;
    background: #333;
    margin-bottom: 1rem;
    padding: 0.5rem 0.5rem;
  }

  .searchInput {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0 1rem;
    font-size: 1rem;
    color: white;
  }

  .searchInput::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .searchIcon {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.3rem;
    margin: 0.3rem;
  }
`;

InputSearch.propTypes = {
  handleSearch: PropTypes.func,
};
