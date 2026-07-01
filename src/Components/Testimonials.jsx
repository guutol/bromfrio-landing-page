import React from "react";

// Depoimentos fictícios como placeholder — substituir por avaliações reais
// de clientes assim que forem coletadas.
const testimonials = [
  {
    name: "Marcos S.",
    location: "Bairro Centro",
    text: "Consertaram minha geladeira frost free no mesmo dia. Atendimento rápido e explicaram tudo antes de cobrar.",
  },
  {
    name: "Juliana R.",
    location: "Bairro Jardim das Flores",
    text: "Levei minha lava e seca com receio, mas o orçamento foi justo e o serviço teve garantia. Recomendo.",
  },
  {
    name: "Comércio Bom Preço",
    location: "Cliente comercial",
    text: "Fazemos manutenção da câmara fria do nosso mercado com a Bomfrio há anos. Sempre pontuais e profissionais.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="section-title text-center">
              O que nossos clientes dizem
            </h2>
            <div className="row gy-4 mt-3">
              {testimonials.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="testimonial-card">
                    <p className="testimonial-text">“{item.text}”</p>
                    <p className="testimonial-author">{item.name}</p>
                    <p className="testimonial-location">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
