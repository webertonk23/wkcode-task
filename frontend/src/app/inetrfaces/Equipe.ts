import { Painel } from "./Painel";
import { Usuario } from "./Usuario";

export interface Equipe {
    id?: number,
    nome: string,
    created_at: string,
    updated_at: string,
    usuarios?: Usuario [],
    paineis?: Painel[],
}