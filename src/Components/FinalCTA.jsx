import React from "react";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h2>Precisa de assistência técnica agora?</h2>
            <p>
              Fale com a gente no WhatsApp e receba seu orçamento sem
              compromisso.
            </p>
            <a
              href="https://wa.me/5518997011035?text=Olá, gostaria de solicitar um orçamento."
              className="btn-cta-primary"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
