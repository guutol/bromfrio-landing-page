import geladeira from "../images/geladeira.jpg";
import maquina_lavar from "../images/maquina_lavar.jpg";
import camara_fria from "../images/camara_fria.jpg";

// As imagens de "Freezers", "Cervejeiras", "Lava e seca" e "Expositores e
// freezers comerciais" são placeholders reaproveitados de equipamentos
// semelhantes até termos fotos próprias desses itens.
const ServiceData = [
  {
    category: "Refrigeração residencial",
    services: [
      {
        imgsrc: geladeira,
        title: "Geladeiras duplex e frost free",
        text: "Diagnóstico e conserto de geladeiras duplex e frost free, com peças de qualidade e garantia no serviço.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para geladeira duplex/frost free.",
      },
      {
        imgsrc: camara_fria,
        title: "Freezers",
        text: "Manutenção e conserto de freezers residenciais, com diagnóstico preciso e atendimento rápido.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para freezer.",
      },
      {
        imgsrc: geladeira,
        title: "Cervejeiras",
        text: "Manutenção de cervejeiras com foco na conservação da temperatura ideal.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para cervejeira.",
      },
    ],
  },
  {
    category: "Lavanderia",
    services: [
      {
        imgsrc: maquina_lavar,
        title: "Máquinas de lavar",
        text: "Manutenção de máquinas de lavar com tampa superior, do diagnóstico ao reparo.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para máquina de lavar.",
      },
      {
        imgsrc: maquina_lavar,
        title: "Lava e seca",
        text: "Assistência técnica especializada em lava e seca residencial.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para lava e seca.",
      },
    ],
  },
  {
    category: "Refrigeração comercial",
    services: [
      {
        imgsrc: camara_fria,
        title: "Câmaras frias",
        text: "Manutenção e assistência técnica em câmaras frias para comércios e indústrias.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para câmara fria.",
      },
      {
        imgsrc: camara_fria,
        title: "Expositores e freezers comerciais",
        text: "Manutenção de expositores e freezers comerciais para mercados, restaurantes e bares.",
        link: "https://wa.me/5518997011035?text=Olá, gostaria de um orçamento para expositor/freezer comercial.",
      },
    ],
  },
];

export default ServiceData;
