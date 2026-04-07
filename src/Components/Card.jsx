import React from "react";

const Card = ({ imgsrc, title, text, link }) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a
              href={link}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
