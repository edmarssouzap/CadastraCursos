export interface Curso {
  cursoId: number;
  nome: string; // Todos os campos desse model é obrigatorio
  dataInicio: Date;
  dataFinal: Date;
  desAssunto: string;
  qtdAlunosTurma: number;
  catId: number;
}
