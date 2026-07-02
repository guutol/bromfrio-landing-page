import React from "react";
import { NavLink } from "react-router-dom";

const whatsappNumber = "5518997011035";
const phoneDisplay = "(18) 99701-1035";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-3">
                <h3 className="footer-brand">
                  <span aria-hidden="true">❄️</span> Bomfrio
                </h3>
                <p className="footer-text">
                  Assistência técnica especializada em refrigeração
                  residencial e comercial, com mais de 20 anos de
                  experiência.
                </p>
              </div>

              <div className="col-6 col-lg-3">
                <h4 className="footer-title">Links rápidos</h4>
                <ul className="footer-links">
                  <li>
                    <NavLink exact to="/">
                      Início
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/services">
                      Serviços
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/about">
                      Sobre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/contact">
                      Contato
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-3">
                <h4 className="footer-title">Contato</h4>
                <ul className="footer-links">
                  <li>
                    <a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de solicitar um orçamento.`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-lg-3">
                <h4 className="footer-title">Atendimento</h4>
                <p className="footer-text mb-2">
                  Segunda a sexta, das 7h às 18h.
                </p>
                <p className="footer-text">
                  Atendemos a cidade e região. Fale com a gente para
                  confirmar a disponibilidade no seu bairro.
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {year} Bomfrio. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
