/** Named photo slots to replace with the owner's optimized images later. */
export interface Photo {
  readonly id: string;
  readonly label: string;
  readonly alt: string;
}

export const PHOTO_DAI: Photo = {
  id: "dai-retrato",
  label: "Retrato da Dai",
  alt: "Espaço reservado para o retrato de Dai Angioletti.",
};

export const PHOTO_FITOTERAPIA: Photo = {
  id: "fitoterapia-capilar",
  label: "Fitoterapia capilar",
  alt: "Espaço reservado para a foto do preparo fitoterápico capilar.",
};

export const PHOTO_SEMI_DEFINITIVA: Photo = {
  id: "semi-definitiva",
  label: "Semi-definitiva",
  alt: "Espaço reservado para a foto de resultado da semi-definitiva.",
};

export const PHOTO_UNHAS_CORAL: Photo = {
  id: "unhas-esmalte-coral",
  label: "Esmaltação em tom coral",
  alt: "Espaço reservado para a foto de esmaltação em tom coral.",
};

export const PHOTO_UNHAS_NUDE: Photo = {
  id: "unhas-esmalte-neutro",
  label: "Esmaltação em tom neutro",
  alt: "Espaço reservado para a foto de esmaltação em tom neutro.",
};

export const PHOTO_CORTE: Photo = {
  id: "resultado-corte",
  label: "Resultado de corte",
  alt: "Espaço reservado para a foto de uma cliente após o corte.",
};

export const PHOTO_CABELO_LISO: Photo = {
  id: "cabelo-liso",
  label: "Resultado de cabelo liso",
  alt: "Espaço reservado para a foto de um resultado de cabelo liso.",
};

export const PHOTO_ATENDIMENTO: Photo = {
  id: "atendimento-no-salao",
  label: "Atendimento no salão",
  alt: "Espaço reservado para a foto de Dai atendendo uma cliente.",
};

export const PHOTO_TRANCAS: Photo = {
  id: "trancas",
  label: "Tranças",
  alt: "Espaço reservado para a foto de um penteado com tranças.",
};
