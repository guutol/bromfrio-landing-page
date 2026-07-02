import React from "react";
import { NavLink } from "react-router-dom";
import about from "../images/about.png";
import ResidentialCommercial from "./ResidentialCommercial";
import FinalCTA from "./FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

const specialties = [
  { icon: "🧊", title: "Geladeiras duplex e frost free" },
  { icon: "🧺", title: "Máquinas de lavar" },
  { icon: "🍺", title: "Cervejeiras" },
  { icon: "❄️", title: "Câmaras frias" },
  { icon: "🏪", title: "Refrigeração comercial" },
];

const values = [
  {
    icon: "🤝",
    title: "Confiança",
    text: "Décadas de atendimento construíram uma relação de confiança com famílias e comércios da região.",
  },
  {
    icon: "💬",
    title: "Transparência",
    text: "Diagnóstico claro e orçamento aprovado antes de qualquer serviço, sem surpresas na hora de pagar.",
  },
  {
    icon: "⚡",
    title: "Agilidade",
    text: "Atendimento rápido, muitas vezes com o conserto concluído no mesmo dia da chamada.",
  },
  {
    icon: "🔧",
    title: "Qualidade técnica",
    text: "Peças de qualidade e técnicos experientes para um reparo que dura, com garantia no serviço.",
  },
];

const About = () => {
  usePageTitle("Sobre a Bomfrio | Refrigeração com mais de 20 anos");

  return (
    <>
      <section className="about-hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1">
                  <span className="about-eyebrow">Quem somos</span>
                  <h1 className="about-title">
                    Mais de 20 anos de experiência em refrigeração
                    residencial e comercial
                  </h1>
                  <p className="about-text">
                    A Bomfrio nasceu para oferecer um atendimento técnico de
                    confiança para quem depende da refrigeração no dia a
                    dia, seja em casa ou no comércio. Ao longo de mais de
                    duas décadas, construímos uma reputação baseada em
                    diagnóstico preciso, atendimento ágil e compromisso com o
                    resultado, sempre com transparência do início ao fim do
                    serviço.
                  </p>
                  <NavLink to="/contact" className="btn-cta-secondary">
                    Fale com a gente
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 about-hero-image-wrap">
                  <img
                    src={about}
                    className="about-hero-image img-fluid"
                    alt="Técnico Bomfrio realizando manutenção de refrigeração"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-specialty-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="section-title text-center">
                Nossa especialidade
              </h2>
              <p className="about-specialty-subtitle text-center">
                Atuamos com diagnóstico técnico especializado nos principais
                equipamentos de refrigeração e lavanderia:
              </p>
              <div className="row gy-4 mt-2">
                {specialties.map((item, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <div className="specialty-card">
                      <span className="specialty-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <p className="specialty-title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="section-title text-center">Nossos valores</h2>
              <div className="row gy-4 mt-2">
                {values.map((item, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div className="value-card">
                      <span className="value-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <h3 className="value-title">{item.title}</h3>
                      <p className="value-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResidentialCommercial />

      <FinalCTA />
    </>
  );
};

export default About;
