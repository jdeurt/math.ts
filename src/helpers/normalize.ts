import type { Digit } from "../primitive/digit";

/**
 * Strips leading 0's
 */
export type NormalizeDigits<D extends Digit[]> = D extends [
    0,
    ...infer Rest extends Digit[]
]
    ? NormalizeDigits<Rest>
    : D;

/**
 * Removes spaces
 */
export type NormalizeString<S extends string> =
    S extends `${infer H} ${infer T}` ? `${H}${NormalizeString<T>}` : S;
