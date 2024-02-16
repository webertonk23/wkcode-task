import { Task } from "./Task";

export interface Sprint {
    id?: string,
    titulo: string,
    inicio: string,
    fim: string,
    situacao: string,
    backlog: string,
    projeto_id: string,
    tasks?: Task[]
}