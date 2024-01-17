import { Utilisateur } from "./utilisateur";

export interface Vehicule {
  id: number;
  marque: string;
  immatriculation: string;
  nombrePlace: number;
  user: Utilisateur;
  dateCreate: Date;
  userId: string;
  dateUpdate: Date;
  archive: boolean;
}
