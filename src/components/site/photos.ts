import dai from "@/assets/dai-angioletti.jpg";
import phytotherapy from "@/assets/fitoterapia-capilar.jpg";
import semiDefinitiva from "@/assets/cabelo-semi-definitiva.jpg";
import unhasCoral from "@/assets/unhas-coral.jpg";
import unhasNeutro from "@/assets/unhas-neutro.jpg";
import corte from "@/assets/corte-curto.jpg";
import corteDesktop from "@/assets/corte-curto-desktop.jpg";
import cabeloLiso from "@/assets/cabelo-liso-finalizado.jpg";
import atendimento from "@/assets/atendimento-salao.jpg";
import trancas from "@/assets/trancas.jpg";

/** Named photo assets used across the site's editorial sections. */
export interface Photo {
  readonly id: string;
  readonly label: string;
  readonly alt: string;
  readonly src: string;
  readonly desktopSrc?: string;
}

export const PHOTO_DAI: Photo = {
  id: "dai-retrato",
  label: "Retrato da Dai",
  alt: "Dai Angioletti, proprietária do salão.",
  src: dai,
};

export const PHOTO_FITOTERAPIA: Photo = {
  id: "fitoterapia-capilar",
  label: "Fitoterapia capilar",
  alt: "Mistura fitoterápica com ervas e cascas cítricas usada no cuidado capilar.",
  src: phytotherapy,
};

export const PHOTO_SEMI_DEFINITIVA: Photo = {
  id: "semi-definitiva",
  label: "Semi-definitiva",
  alt: "Cabelos castanhos longos, alinhados e com brilho após a semi-definitiva.",
  src: semiDefinitiva,
};

export const PHOTO_UNHAS_CORAL: Photo = {
  id: "unhas-esmalte-coral",
  label: "Esmaltação em tom coral",
  alt: "Unhas esmaltadas em coral, com anel dourado e folhagem decorativa ao fundo.",
  src: unhasCoral,
};

export const PHOTO_UNHAS_NUDE: Photo = {
  id: "unhas-esmalte-neutro",
  label: "Esmaltação em tom neutro",
  alt: "Unhas esmaltadas em tom nude sobre uma manta rosa clara.",
  src: unhasNeutro,
};

export const PHOTO_CORTE: Photo = {
  id: "resultado-corte",
  label: "Resultado de corte",
  alt: "Cliente sorrindo com corte curto em camadas e franja.",
  src: corte,
  desktopSrc: corteDesktop,
};

export const PHOTO_CABELO_LISO: Photo = {
  id: "cabelo-liso",
  label: "Resultado de cabelo liso",
  alt: "Cabelos longos, castanhos e lisos vistos por trás no salão.",
  src: cabeloLiso,
};

export const PHOTO_ATENDIMENTO: Photo = {
  id: "atendimento-no-salao",
  label: "Atendimento no salão",
  alt: "Profissional atendendo uma cliente no salão Dai Angioletti Beauty.",
  src: atendimento,
};

export const PHOTO_TRANCAS: Photo = {
  id: "trancas",
  label: "Tranças",
  alt: "Penteado com tranças finas e acessórios brilhantes.",
  src: trancas,
};
