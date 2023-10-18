import { useState, useEffect, useRef } from "react";
import SaleCard from "../../sale-card/SaleCard";
import InputSearch from "../../input-search/InputSearch";
import Alert from "../../alert/Alert";
import Pagination from "../../pagination/Pagination.jsx";
import catalogue from "../../../data/Catalogue.js";
import styled from "styled-components";

const SectionTwo = () => {
  const cardsContainerRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Función para eliminar tildes y caracteres especiales
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // Filtrar el catálogo en función del texto de búsqueda
  const filteredCatalogue = catalogue.filter((item) =>
    removeAccents(item.name).includes(removeAccents(searchText))
  );

  useEffect(() => {
    setTotalItems(filteredCatalogue.length);
    setCurrentPage(1);
  }, [filteredCatalogue.length]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    if (cardsContainerRef.current) {
      const offset = 30; // Ajusta el valor del offset según tus necesidades
      const targetElement = cardsContainerRef.current;
      targetElement.style.marginTop = `-${offset}px`; // Aplicar un margen superior negativo
      targetElement.scrollIntoView({
        block: "start",
      });

      // Restablecer el margen superior
      targetElement.style.marginTop = "0";
    }
  };

  return (
    <Section id="catalogo">
      <h2 className="title">Catálogo</h2>
      <InputSearch handleSearch={setSearchText}></InputSearch>
      <p className="total-items">Total Productos: {totalItems}</p>
      <div className="cardsContainer" ref={cardsContainerRef}>
        {searchText ? (
          filteredCatalogue.length === 0 ? (
            <Alert message="No encontramos lo que buscas" />
          ) : (
            filteredCatalogue
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item) => <SaleCard key={item.id} item={item}></SaleCard>)
          )
        ) : (
          filteredCatalogue
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => <SaleCard key={item.id} item={item}></SaleCard>)
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
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
    margin: 3rem auto;
  }

  .title {
    text-align: center;
    font-size: var(--title-size);
    color: var(--text-color);
  }

  .total-items {
    color: var(--text-color);
    text-align: center;
    font-size: 1.2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    .title {
      font-size: var(--title-size-lg);
    }
  }
`;
