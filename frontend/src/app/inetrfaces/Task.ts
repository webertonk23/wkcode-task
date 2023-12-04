import { Usuario } from "./Usuario";

export interface Task {
    id?: number,
    titulo: string,
    descricao: string,
    created_at: string,
    updated_at: string,
    usuario: Usuario,
    detalhes?: []
}