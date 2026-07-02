import React from "react";
import Card from "./Card";
import ServiceData from "./ServiceData";
import FinalCTA from "./FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

const Services = () => {
  usePageTitle("Serviços | Bomfrio Refrigeração");

  return (
    <>
      <section className="services-intro">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <h1 className="services-title">
                Assistência técnica em refrigeração
              </h1>
              <p className="services-subtitle">
                Atendemos equipamentos residenciais e comerciais com
                diagnóstico técnico, agilidade e garantia no serviço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {ServiceData.map((group, index) => (
        <section
          className={`services-category ${
            index % 2 === 1 ? "services-category-alt" : ""
          }`}
          key={index}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <h2 className="services-category-title">{group.category}</h2>
                <div className="row gy-4 mt-3">
                  {group.services.map((val, i) => (
                    <Card
                      imgsrc={val.imgsrc}
                      title={val.title}
                      text={val.text}
                      link={val.link}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
};

export default Services;
