export type Or<T extends 1 | 0> = 1 extends T ? 1 : 0;
