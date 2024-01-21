import { TypeReservation } from "./typeReservation";
import { Trajet } from "./trajet";
import { Utilisateur } from "./utilisateur";
import { EtatReservation } from "./etatReservation";

export class Reservation {
  id!: number;
  user!: Utilisateur;
  trajet!: Trajet;
  commentaire!: string;
  etatReservation!: EtatReservation;
  typeReservation!: TypeReservation;
  dateCreate!: Date;
  dateUpdate!: Date;
  userId!: string;
  archive!: boolean;
  designation!: string;
}
