import { Task } from "./Task";

export interface Categoria {
    id?: number,
    nome: string,
    created_at?: string,
    updated_at?: string,
    tasks?: Task[]
}