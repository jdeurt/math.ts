import type { Digit } from "../primitive/digit";
import type { CompareMap } from "../constant/compare-map";

type CompareDigitsEqLen<A extends Digit[], B extends Digit[]> = [A, B] extends [
    [infer AH extends Digit, ...infer AT extends Digit[]],
    [infer BH extends Digit, ...infer BT extends Digit[]]
]
    ? CompareMap[AH][BH] extends 0
        ? CompareDigitsEqLen<AT, BT>
        : CompareMap[AH][BH]
    : 0;

export type CompareDigits<
    A extends Digit[],
    B extends Digit[]
> = A["length"] extends B["length"]
    ? CompareDigitsEqLen<A, B>
    : keyof B extends keyof A
    ? 1
    : -1;
