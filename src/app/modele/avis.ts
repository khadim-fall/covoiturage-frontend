import { Utilisateur } from "./utilisateur";

export interface Avis {

  id: number;
  commentaire: string;
  rdv: string;
  user: Utilisateur;
  dateCreate: Date;
  dateUpdate: Date;
  userId: string;
  archive: boolean;
}
