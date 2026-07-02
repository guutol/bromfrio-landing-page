import React, { useState } from "react";
import swal from "sweetalert";

const whatsappNumber = "5518997011035";

const quickInfo = [
  { icon: "🏠", title: "Atendimento residencial" },
  { icon: "🏢", title: "Atendimento comercial" },
  { icon: "⏳", title: "Mais de 20 anos de experiência" },
  { icon: "💬", title: "Orçamento transparente" },
];

const equipmentOptions = [
  "Geladeira",
  "Freezer",
  "Máquina de lavar",
  "Lava e seca",
  "Cervejeira",
  "Câmara fria",
  "Outro",
];

const serviceHours = [
  {
    icon: "🕒",
    title: "Horário de atendimento",
    text: "Segunda a sexta, das 7h às 18h.",
  },
  {
    icon: "🛠️",
    title: "Residencial e comercial",
    text: "Atendemos tanto a sua casa quanto o seu comércio, com o mesmo cuidado técnico.",
  },
  {
    icon: "📍",
    title: "Área de cobertura",
    text: "Atendemos a cidade e região. Fale com a gente para confirmar a disponibilidade no seu bairro.",
  },
];

const initialData = {
  nome: "",
  telefone: "",
  cidade: "",
  equipamento: "",
  mensagem: "",
};

const Contact = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((preVal) => ({
        ...preVal,
        [name]: "",
      }));
    }
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!data.nome.trim()) newErrors.nome = "Informe seu nome.";
    if (!data.telefone.trim()) newErrors.telefone = "Informe seu telefone.";
    if (!data.equipamento) newErrors.equipamento = "Selecione o equipamento.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const linhas = [
      `Nome: ${data.nome}`,
      data.cidade.trim() && `Cidade: ${data.cidade}`,
      `Equipamento: ${data.equipamento}`,
      `Telefone: ${data.telefone}`,
      data.mensagem.trim() && `Mensagem: ${data.mensagem}`,
    ].filter(Boolean);

    const texto = `Olá, gostaria de solicitar um orçamento.\n\n${linhas.join(
      "\n"
    )}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");

    swal(
      "Redirecionando!",
      "Você será enviado para o WhatsApp para finalizar seu contato.",
      "success"
    );

    setData(initialData);
    setErrors({});
  };

  return (
    <>
      <section className="contact-hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <span className="contact-eyebrow">Fale com a Bomfrio</span>
              <h1 className="contact-title">
                Precisa de assistência técnica? Fale com a Bomfrio.
              </h1>
              <p className="contact-subtitle">
                Atendimento rápido e especializado em refrigeração
                residencial e comercial, do diagnóstico ao conserto.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de solicitar um orçamento.`}
                className="btn-cta-primary"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {quickInfo.map((item, index) => (
                  <div className="col-6 col-lg-3" key={index}>
                    <div className="contact-info-card">
                      <span className="contact-info-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <p className="contact-info-title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="section-title text-center mb-4">
                Solicite seu orçamento
              </h2>
              <div className="contact-form-card">
                <form onSubmit={formSubmitHandle} noValidate>
                  <div className="row gy-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="nome" className="form-label">
                        Nome
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.nome ? "is-invalid" : ""
                        }`}
                        id="nome"
                        name="nome"
                        value={data.nome}
                        onChange={inputEvent}
                        placeholder="Digite seu nome"
                      />
                      {errors.nome && (
                        <div className="invalid-feedback d-block">
                          {errors.nome}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="telefone" className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${
                          errors.telefone ? "is-invalid" : ""
                        }`}
                        id="telefone"
                        name="telefone"
                        value={data.telefone}
                        onChange={inputEvent}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.telefone && (
                        <div className="invalid-feedback d-block">
                          {errors.telefone}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="cidade" className="form-label">
                        Cidade
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        name="cidade"
                        value={data.cidade}
                        onChange={inputEvent}
                        placeholder="Digite sua cidade"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="equipamento" className="form-label">
                        Tipo de equipamento
                      </label>
                      <select
                        className={`form-select ${
                          errors.equipamento ? "is-invalid" : ""
                        }`}
                        id="equipamento"
                        name="equipamento"
                        value={data.equipamento}
                        onChange={inputEvent}
                      >
                        <option value="">Selecione o equipamento</option>
                        {equipmentOptions.map((option, index) => (
                          <option value={option} key={index}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.equipamento && (
                        <div className="invalid-feedback d-block">
                          {errors.equipamento}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="mensagem" className="form-label">
                        Mensagem
                      </label>
                      <textarea
                        className="form-control"
                        id="mensagem"
                        rows="3"
                        name="mensagem"
                        value={data.mensagem}
                        onChange={inputEvent}
                        placeholder="Descreva o problema do seu equipamento"
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        className="btn-cta-primary contact-submit-btn"
                        type="submit"
                      >
                        Enviar pelo WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-hours-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="section-title text-center">Atendimento</h2>
              <div className="row gy-4 mt-2">
                {serviceHours.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="hours-card">
                      <span className="hours-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <h3 className="hours-title">{item.title}</h3>
                      <p className="hours-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <h2>Solicite seu orçamento pelo WhatsApp.</h2>
              <p>
                Fale agora com a Bomfrio e receba atendimento rápido e
                especializado.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de solicitar um orçamento.`}
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
    </>
  );
};

export default Contact;
