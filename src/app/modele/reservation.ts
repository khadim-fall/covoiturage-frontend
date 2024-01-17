import { TypeReservation } from "./typeReservation";
import { Trajet } from "./trajet";
import { Utilisateur } from "./utilisateur";

export interface Reservation {
  id: number;
  user: Utilisateur;
  trajet: Trajet;
  commentaire: string;
  etatReservation: string;
  typeReservation: TypeReservation;
  dateCreate: Date;
  dateUpdate: Date;
  userId: string;
  archive: boolean;
  designation: string;
}
