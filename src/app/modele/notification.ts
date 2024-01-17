import { Reservation } from "./reservation";
import { Utilisateur } from "./utilisateur";

export interface Notification {
  id: number;
  message: string;
  reservation: Reservation;
  user: Utilisateur;
  dateCreate: Date;
  dateUpdate: Date;
  userId: string;
  archive: boolean;

}
