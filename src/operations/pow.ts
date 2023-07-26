import type { Digit } from "../primitive/digit";
import type { DivMod } from "./div";
import type { MulDigits } from "./mul";

/**
 * https://en.wikipedia.org/wiki/Exponentiation_by_squaring
 */
export type PowDigits<A extends Digit[], B extends Digit[]> = B extends [0]
    ? [1]
    : B extends [1]
    ? A
    : DivMod<B, [2]> extends [infer Q extends Digit[], infer R extends Digit[]]
    ? R extends [0]
        ? PowDigits<MulDigits<A, A>, Q>
        : MulDigits<A, PowDigits<MulDigits<A, A>, Q>>
    : never;
