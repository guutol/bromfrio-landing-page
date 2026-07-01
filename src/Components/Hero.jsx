import React from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";

const Hero = () => {
  return (
    <section id="home-hero" className="hero-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 pt-5 pt-lg-0">
                <span className="hero-eyebrow">
                  Assistência técnica em refrigeração
                </span>
                <h1 className="hero-title">
                  Conserto e manutenção de{" "}
                  <strong>geladeiras, lava e seca e câmaras frias</strong>
                </h1>
                <p className="hero-subtitle">
                  Atendimento residencial e comercial com mais de 20 anos de
                  experiência, diagnóstico técnico preciso e orçamento
                  transparente.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://wa.me/5518997011035?text=Olá, gostaria de solicitar um orçamento."
                    className="btn-cta-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                  <NavLink to="/services" className="btn-cta-secondary">
                    Ver serviços
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 hero-image-wrap">
                <img
                  src={home}
                  className="img-fluid hero-image animated"
                  alt="Técnico realizando manutenção em equipamento de refrigeração"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
