import React from "react";

// Placeholders em texto — substituir por logos reais das marcas atendidas
// assim que estiverem disponíveis.
const brands = [
  "Brastemp",
  "Consul",
  "Electrolux",
  "LG",
  "Samsung",
  "Continental",
];

const BrandsStrip = () => {
  return (
    <section className="brands-strip">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <p className="brands-title">
              Atendemos as principais marcas do mercado
            </p>
            <div className="brands-list">
              {brands.map((brand, index) => (
                <span className="brand-badge" key={index}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsStrip;
