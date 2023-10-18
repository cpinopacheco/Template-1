import styled from "styled-components";
import PropTypes from "prop-types";

const Alert = ({ message }) => {
  return <Container>{message}</Container>;
};

export default Alert;

const Container = styled.div`
  background-color: #ff5959;
  border-radius: 1rem;
  color: #fff;
  padding: 1rem;
  text-transform: uppercase;
`;

Alert.propTypes = {
  message: PropTypes.string,
};
