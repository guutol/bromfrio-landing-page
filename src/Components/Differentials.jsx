import React from "react";

const differentials = [
  {
    icon: "🔧",
    title: "Atendimento especializado",
    text: "Técnicos experientes em refrigeração residencial e comercial.",
  },
  {
    icon: "🔍",
    title: "Diagnóstico técnico",
    text: "Identificação precisa do problema antes de qualquer serviço.",
  },
  {
    icon: "💰",
    title: "Orçamento transparente",
    text: "Sem surpresas: você aprova o valor antes do conserto.",
  },
  {
    icon: "🤝",
    title: "Compromisso com o cliente",
    text: "Prazos cumpridos e garantia em todos os serviços realizados.",
  },
];

const Differentials = () => {
  return (
    <section className="differentials-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="section-title text-center">
              Por que escolher a Bomfrio
            </h2>
            <div className="row gy-4 mt-3">
              {differentials.map((item, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="differential-card">
                    <span className="differential-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3 className="differential-title">{item.title}</h3>
                    <p className="differential-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
