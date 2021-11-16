export interface Conta {
  contaId: number;
  usuario: string; // obrigatorio
  senha: string; // obrigatorio
  tipo: string; // opcional
  status: string; // opcional
}
