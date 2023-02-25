import { student } from "./student";

export class Competence {
    idCompetence!:number ;
    nomCompetence!: string;
    type!:string;
    etudiants:student[]=[];
    niveauC!:string;
}