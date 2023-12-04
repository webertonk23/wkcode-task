import { Equipe } from "./Equipe";

export interface Usuario {
    id?: number,
    nome: string,
    descricao: string,
    created_at: string,
    updated_at: string,
    equipe: Equipe,
}