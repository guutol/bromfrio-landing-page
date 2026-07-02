import React from "react";

const Card = ({ imgsrc, title, text, link }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="service-card">
        <div className="service-card-img-wrap">
          <img src={imgsrc} className="service-card-img" alt={title} />
        </div>
        <div className="service-card-body">
          <h5 className="service-card-title">{title}</h5>
          <p className="service-card-text">{text}</p>
          <a
            href={link}
            className="service-card-cta"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
