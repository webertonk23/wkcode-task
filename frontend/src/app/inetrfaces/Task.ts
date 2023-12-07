import { Categoria } from "./Categoria";
import { Painel } from "./Painel";
import { Usuario } from "./Usuario";

export interface Task {
    id?: number,
    titulo: string,
    descricao: string,
    created_at?: string,
    updated_at?: string,
    user_id?: number,
    categoria_id?: number,
    painel_id?: number,
    usuario?: Usuario,
    detalhes?: [],
    categoria?: Categoria,
    painel?: Painel,
}