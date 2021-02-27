export interface IMonoid<T>{
  concat: (operand: T) => T // Associative & closed
}