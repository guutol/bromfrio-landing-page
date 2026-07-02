import geladeira from "../images/geladeira.jpg";
import maquina_lavar from "../images/maquina_lavar.jpg";
import camara_fria from "../images/camara_fria.jpg";
import ar_condicionado from "../images/ar_condicionado.jpeg";
import { buildWhatsAppLink } from "../constants/whatsapp";

const ServiceData = [
  {
    category: "Refrigeração residencial",
    services: [
      {
        imgsrc: geladeira,
        title: "Geladeiras duplex e frost free",
        text: "Diagnóstico e conserto de geladeiras duplex e frost free, com peças de qualidade e garantia no serviço.",
        link: buildWhatsAppLink(
          "Olá, gostaria de um orçamento para geladeira duplex/frost free."
        ),
      },
      {
        imgsrc: ar_condicionado,
        title: "Ar-condicionado",
        text: "Instalação, limpeza e manutenção de ar-condicionado para melhor desempenho e eficiência.",
        link: buildWhatsAppLink(
          "Olá, gostaria de um orçamento para ar-condicionado."
        ),
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
        link: buildWhatsAppLink(
          "Olá, gostaria de um orçamento para máquina de lavar."
        ),
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
        link: buildWhatsAppLink(
          "Olá, gostaria de um orçamento para câmara fria."
        ),
      },
    ],
  },
];

export default ServiceData;
