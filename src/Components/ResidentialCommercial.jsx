import React from "react";

const ResidentialCommercial = () => {
  return (
    <section className="res-com-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="res-com-card res-card">
                  <h3>Atendimento residencial</h3>
                  <p>
                    Conserto de geladeiras, máquinas de lavar, lava e seca e
                    cervejeiras para sua casa ou apartamento, com agilidade e
                    garantia.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="res-com-card com-card">
                  <h3>Atendimento comercial</h3>
                  <p>
                    Manutenção de câmaras frias e refrigeração comercial para
                    mercados, restaurantes, bares e outros estabelecimentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCommercial;
