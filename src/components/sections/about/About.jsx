import styled from "styled-components";
import Card3d from "../../card-3d/Card3d";
import MyCompany from "../../../data/MyCompany.js";

const About = () => {
  const { name } = MyCompany;

  return (
    <Section id="nosotros">
      <h2 className="title">Acerca de {name}</h2>
      <p className="subtitle">
        En <b>{name}</b>, compartimos una pasión por la belleza y la elegancia
        atemporal que solo las joyas bien hechas pueden ofrecer. Nuestra
        historia es una historia de amor por las joyas y un compromiso
        inquebrantable con la artesanía de alta calidad.
      </p>
      <Card3d></Card3d>
    </Section>
  );
};

export default About;

const Section = styled.section`
  margin: 6rem 2rem;

  .title {
    text-align: center;
    font-size: var(--title-size);
    color: var(--text-color);
    text-transform: uppercase;
  }

  .subtitle {
    color: var(--text-color);
    font-size: var(--subtitle-size);
  }

  @media (min-width: 992px) {
    .subtitle {
      text-align: center;
      width: 60%;
      margin: 2rem auto;
    }
  }

  @media (min-width: 992px) {
    .title {
      font-size: var(--title-size-lg);
    }
  }
`;
