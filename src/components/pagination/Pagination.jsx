import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = [];
  const maxVisiblePages = 4; // Número máximo de botones de página visibles

  for (let number = 1; number <= totalPages; number++) {
    if (
      number === 1 ||
      number === totalPages ||
      Math.abs(number - currentPage) < (maxVisiblePages - 2) / 2
    ) {
      renderPageNumbers.push(
        <button
          key={number}
          className={`button ${currentPage === number ? "active" : ""}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      );
    }
  }

  return (
    <Container>
      <div className="pagination">
        {currentPage > 1 && (
          <button
            className="button"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        )}
        {renderPageNumbers}
        {currentPage < totalPages && (
          <button
            className="button"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        )}
      </div>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;

  .button {
    background-color: var(--tertiary-color);
    color: var(--text-color);
    text-transform: uppercase;
    margin: 0.5rem;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .button.active {
    transform: scale(1.1);
    background-color: var(--secondary-color);
  }
`;

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
