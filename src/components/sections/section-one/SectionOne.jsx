import styled from "styled-components";
import Card3d from "../../card-3d/Card3d";
import MyCompany from "../../../data/MyCompany.js";

const SectionOne = () => {
  const { name } = MyCompany;

  return (
    <Section id="nosotros">
      <h2 className="title">Acerca de {name}</h2>
      <Card3d></Card3d>
    </Section>
  );
};

export default SectionOne;

const Section = styled.section`
  margin: 6rem 1rem;

  .title {
    text-align: center;
    font-size: var(--title-size);
    color: var(--text-color);
  }

  @media (min-width: 992px) {
    .title {
      font-size: var(--title-size-lg);
    }
  }
`;
