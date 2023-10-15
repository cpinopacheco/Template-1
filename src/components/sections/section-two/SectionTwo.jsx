import SaleCard from "../../sale-card/SaleCard";
import styled from "styled-components";
import catalogue from "../../../data/Catalogue.js";

const SectionTwo = () => {
  return (
    <Section>
      <h2 className="title">Cátalogo</h2>
      <div className="cardsContainer">
        {catalogue.map((item) => (
          <SaleCard key={item.id} item={item}></SaleCard>
        ))}
      </div>
    </Section>
  );
};

export default SectionTwo;

const Section = styled.section`
  margin: 6rem auto;

  .cardsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    width: 90%;
    margin: 5rem auto;
  }

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
