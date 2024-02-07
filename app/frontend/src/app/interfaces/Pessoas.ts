export interface Pessoas {
    id?: string,
    nome: string,
    cpf: string,
    logradouro?: string,
    numero?: string,
    complemento?: string,
    bairro?: string,
    cidade?: string,
    uf?: string, 
    cep?: string,
    telefones?: { telefone: string; whatsapp: boolean }[],
    email?: string,
}