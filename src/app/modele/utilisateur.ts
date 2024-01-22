import { CategoriePermis } from "./categoriePermis";
import { Profil } from "./profil";
import { Reservation } from "./reservation";
import { Vehicule } from "./vehicule";

export class Utilisateur {

  id!: number;
  nom!: string;
  prenom!: string |undefined;
  email!: string |undefined;
  login!: string |undefined;
  password!: string ;
  telephone!: string |undefined;
  adresse!: string |undefined;
  cni!: string |undefined;
  dateNaissance!: string |undefined;
  permis!: string |undefined;
  categoriePermis!: CategoriePermis |undefined;
  addProfil!: Profil |undefined;
  userId!: string |undefined;
  abstractProfil!: Profil |undefined;
  profils!: Profil[] |undefined;
  reservations!: Reservation[] |undefined;
  vehicules!: Vehicule[] |undefined;
  dateCreate!: Date |undefined;
  dateUpdate!: Date |undefined;
  archive!: boolean |undefined;
}
