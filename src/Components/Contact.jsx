import React, { useState } from "react";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    msg: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();

    const numero = "5518997011035";
    const texto = `Olá, me chamo ${data.fullname}\nProblema: ${data.msg}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    swal("Redirecionando!", "Você será enviado para o WhatsApp.", "success");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contato</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Digite seu nome"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Descreva seu problema
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary mt-3"
                    type="submit"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
