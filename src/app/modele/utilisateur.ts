import { CategoriePermis } from "./categoriePermis";
import { Profil } from "./profil";
import { Reservation } from "./reservation";
import { Vehicule } from "./vehicule";

export interface Utilisateur {

  id: number;
  nom: string;
  prenom: string;
  email: string;
  login: string;
  password: string;
  telephone: string;
  adresse: string;
  cni: string;
  dateNaissance: string;
  permis: string;
  categoriePermis: CategoriePermis;
  addProfil: Profil;
  userId: string;
  abstractProfil: Profil;
  profils: Profil[];
  reservations: Reservation[];
  vehicules: Vehicule[];
  dateCreate: Date;
  dateUpdate: Date;
  archive: boolean;
}
