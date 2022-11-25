import type { logement, logementHomeFormatted } from "../types/logement";
export const formatLogementForHome = (
  logement: logement
): logementHomeFormatted => {
  return { id : logement.id, title: logement.title, cover: logement.cover };
};
