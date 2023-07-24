import type { Digit } from "../primitive/digit";
import type { AddDigits } from "./add";

type MulX2<D extends Digit[]> = AddDigits<D, D>;
type MulX3<D extends Digit[]> = AddDigits<MulX2<D>, D>;
type MulX4<D extends Digit[]> = AddDigits<MulX3<D>, D>;
type MulX5<D extends Digit[]> = AddDigits<MulX4<D>, D>;
type MulX6<D extends Digit[]> = AddDigits<MulX5<D>, D>;
type MulX7<D extends Digit[]> = AddDigits<MulX6<D>, D>;
type MulX8<D extends Digit[]> = AddDigits<MulX7<D>, D>;
type MulX9<D extends Digit[]> = AddDigits<MulX8<D>, D>;
type MulX10<D extends Digit[]> = [...D, 0];

export type MulXN<A extends Digit[], B extends Digit> = B extends 0
    ? [0]
    : B extends 1
    ? A
    : B extends 2
    ? MulX2<A>
    : B extends 3
    ? MulX3<A>
    : B extends 4
    ? MulX4<A>
    : B extends 5
    ? MulX5<A>
    : B extends 6
    ? MulX6<A>
    : B extends 7
    ? MulX7<A>
    : B extends 8
    ? MulX8<A>
    : MulX9<A>;

export type MulDigits<A extends Digit[], B extends Digit[]> = B extends [
    ...infer BInit extends Digit[],
    infer BLast extends Digit
]
    ? AddDigits<MulXN<A, BLast>, MulX10<MulDigits<A, BInit>>>
    : [];
