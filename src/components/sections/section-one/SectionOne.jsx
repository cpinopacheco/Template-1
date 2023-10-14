import styled from "styled-components";
import Card3d from "../../card-3d/Card3d";

const SectionOne = () => {
  return (
    <Section>
      <h2>Titulo de sección</h2>
      <div className="containerCard"></div>
      <Card3d></Card3d>
    </Section>
  );
};

export default SectionOne;

const Section = styled.section`
  margin: 6rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 4rem;
    }
  }

  .containerCard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
  }
`;
