export const WHATSAPP_NUMBER = "5518997011035";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, gostaria de solicitar um orçamento.";

export const buildWhatsAppLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
