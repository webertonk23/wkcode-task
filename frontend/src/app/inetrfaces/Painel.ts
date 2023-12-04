import { Categoria } from "./Categoria";

export interface Painel {
    id?: number,
    titulo: string,
    descricao: string,
    created_at: string,
    updated_at: string,
    categorias:  Categoria[]
}