import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import HomeServicesData from "./HomeServicesData";

const HomeServices = () => {
  return (
    <section className="home-services-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="section-title text-center">
              Nossos principais serviços
            </h2>
            <div className="row gy-4 mt-3">
              {HomeServicesData.map((val, index) => (
                <Card
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  link={val.link}
                  key={index}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <NavLink to="/services" className="btn-cta-secondary">
                Ver todos os serviços
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
