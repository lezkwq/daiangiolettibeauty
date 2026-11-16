/** Public contact and location details shared for Dai Angioletti Beauty. */
export const PHONE_DISPLAY = "(47) 99709-4045";
export const PHONE_TEL = "+5547997094045";
export const INSTAGRAM = "@daiangiolettibeauty";
export const INSTAGRAM_URL = "https://www.instagram.com/daiangiolettibeauty/";

export const ADDRESS_LINES = [
  "R. Monte Neblina, 559",
  "Monte Alegre",
  "Camboriú, SC",
  "88348-441",
] as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Monte+Neblina%2C+559%2C+Monte+Alegre%2C+Cambori%C3%BA%2C+SC+88348-441";

/** Build a WhatsApp link with a contextual booking message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsApp(service: string): string {
  return whatsappLink(
    `Olá! Acessei o site da Dai Angioletti Beauty e gostaria de informações sobre ${service} e horários disponíveis.`,
  );
}

export const WHATSAPP_GERAL = whatsappLink(
  "Olá! Encontrei a Dai Angioletti Beauty pelo site e gostaria de consultar os horários disponíveis para atendimento.",
);

export const WHATSAPP_AVALIACAO = whatsappLink(
  "Olá! Acessei o site da Dai Angioletti Beauty e gostaria de informações sobre saúde e regeneração capilar.",
);
