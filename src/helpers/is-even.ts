import type { Digit } from "../primitive/digit";

export type IsEven<D extends Digit[]> = D extends [...Digit[], infer Last]
    ? Last extends 0 | 2 | 4 | 6 | 8
        ? 1
        : 0
    : never;
