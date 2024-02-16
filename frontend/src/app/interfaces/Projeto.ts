import { Sprint } from './Sprint';
import { Task } from './Task';

export interface Projeto {
    id?: string,
    titulo: string,
    descricao: string,
    tasks?: Task[]
    sprints?: Sprint[]
}