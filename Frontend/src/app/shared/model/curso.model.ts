export interface Curso {
  cursoId: number;
  nome: string; // obrigatorio
  dataInicio: Date; // obrigatorio
  dataFinal: Date; // obrigatorio
  desAssunto: string; // obrigatorio
  qtdAlunosTurma: number; // opcional
  catId: number; // obrigatorio
}
