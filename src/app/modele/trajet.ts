import { TypeTrajet } from "./typeTrajet";
import { Ville } from "./ville";

export interface Trajet {
  id: number;
  duree: number;
  type: TypeTrajet;
  depart: Ville;
  arrivee: Ville;
  distance: number;
  dateDepart: Date;
  prix: number;
  dateCreate: Date;
  dateUpdate: Date;
  userId: string;
  archive: boolean;
}
