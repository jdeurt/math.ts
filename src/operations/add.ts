import type { AddMap, AddCarryMap } from "../constant/add-map";
import type { NormalizeDigits } from "../helpers/normalize";
import type { Digit } from "../primitive/digit";

type _AddDigits<
    A extends Digit[],
    B extends Digit[],
    Cin extends 0 | 1 = 0
> = A extends [...infer AInit extends Digit[], infer ALast extends Digit]
    ? B extends [...infer BInit extends Digit[], infer BLast extends Digit]
        ? [
              ..._AddDigits<AInit, BInit, AddCarryMap[Cin][ALast][BLast]>,
              AddMap[Cin][ALast][BLast]
          ]
        : [
              ..._AddDigits<AInit, [], AddCarryMap[Cin][ALast][0]>,
              AddMap[Cin][ALast][0]
          ]
    : B extends [...infer BInit extends Digit[], infer BLast extends Digit]
    ? [
          ..._AddDigits<[], BInit, AddCarryMap[Cin][0][BLast]>,
          AddMap[Cin][0][BLast]
      ]
    : Cin extends 1
    ? [1]
    : [];

export type AddDigits<
    A extends Digit[],
    B extends Digit[],
    Cin extends 0 | 1 = 0
> = NormalizeDigits<_AddDigits<A, B, Cin>>;
