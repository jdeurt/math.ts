import type { SubCarryMap, SubMap } from "../constant/sub-map";
import type { NormalizeDigits } from "../helpers/normalize";
import type { Digit } from "../primitive/digit";

type _SubDigits<
    A extends Digit[],
    B extends Digit[],
    Cin extends 0 | 1 = 0
> = A extends [...infer AInit extends Digit[], infer ALast extends Digit]
    ? B extends [...infer BInit extends Digit[], infer BLast extends Digit]
        ? [
              ...SubDigits<AInit, BInit, SubCarryMap[Cin][ALast][BLast]>,
              SubMap[Cin][ALast][BLast]
          ]
        : [
              ...SubDigits<AInit, [], SubCarryMap[Cin][ALast][0]>,
              SubMap[Cin][ALast][0]
          ]
    : B extends [...infer BInit extends Digit[], infer BLast extends Digit]
    ? [
          ...SubDigits<[], BInit, SubCarryMap[Cin][0][BLast]>,
          SubMap[Cin][0][BLast]
      ]
    : Cin extends 1
    ? [9]
    : [];

export type SubDigits<
    A extends Digit[],
    B extends Digit[],
    Cin extends 0 | 1 = 0
> = NormalizeDigits<_SubDigits<A, B, Cin>>;
