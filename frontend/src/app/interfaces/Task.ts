import { Status } from "./Status";

export interface Task {
    id?: string,
    titulo: string,
    descricao: string,
    inicio?: string,
    fim?: string,
    inicio_previstto: string,
    fim_previsto: string,
    duracao_prevista: string,
    duracao?: string,
    status_id?: string,
    status?: Status
    situacao?: string,
    pessoa_id?: string,
    formulario?: string,
}