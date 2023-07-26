import type { IncDigits } from "../helpers/inc";
import type { NormalizeDigits } from "../helpers/normalize";
import type { Digit } from "../primitive/digit";
import type { CompareDigits } from "./comparisons";
import type { SubDigits } from "./sub";

/**
 * N / D = [Q, R]
 */
type DivMod<
    N extends Digit[],
    D extends Digit[],
    Q extends Digit[] = [0]
> = CompareDigits<N, D> extends 1 | 0
    ? DivMod<SubDigits<N, D>, D, IncDigits<Q>>
    : [Q, N];

type DivNumeratorRec<
    N extends Digit[],
    D extends Digit[],
    CN extends Digit[] = [],
    Q extends Digit[] = [],
    R extends Digit[] = [0]
> = N extends [infer NHead extends Digit, ...infer NTail extends Digit[]]
    ? DivMod<[...CN, NHead], D> extends [
          infer _Q extends Digit[],
          infer _R extends Digit[]
      ]
        ? _Q extends [0]
            ? DivNumeratorRec<NTail, D, [...CN, NHead], [...Q, 0], _R>
            : DivNumeratorRec<NTail, D, _R, [...Q, ..._Q], _R>
        : never
    : [NormalizeDigits<Q>, NormalizeDigits<R>];

export type DivDigits<N extends Digit[], D extends Digit[]> = DivNumeratorRec<
    N,
    D
>;
