import React from "react";

const trustItems = [
  { value: "+20 anos", label: "de experiência" },
  { value: "Garantia", label: "no serviço" },
  { value: "Atendimento", label: "rápido" },
  { value: "Residencial", label: "e comercial" },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3 text-center">
              {trustItems.map((item, index) => (
                <div className="col-6 col-lg-3" key={index}>
                  <p className="trust-value">{item.value}</p>
                  <p className="trust-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
