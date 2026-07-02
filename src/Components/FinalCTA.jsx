import React from "react";
import { buildWhatsAppLink } from "../constants/whatsapp";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h2>Precisa de assistência técnica agora?</h2>
            <p>
              Fale com a gente no WhatsApp e receba seu orçamento.
            </p>
            <a
              href={buildWhatsAppLink()}
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
