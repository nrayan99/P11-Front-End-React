import type { logement } from "../types/logement";
import type { logementHomeFormatted } from "../types/logementHomeFormatted";
export const formatLogementForHome = (
  logement: logement
): logementHomeFormatted => {
  return { title: logement.title, cover: logement.cover };
};
