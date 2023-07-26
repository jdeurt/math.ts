import type { AddCarryMap, AddMap } from "../constant/add-map";
import type { Digit } from "../primitive/digit";

export type IncDigits<
    A extends Digit[],
    Amt extends Digit = 1,
    Cin extends 0 | 1 = 0
> = A extends [...infer Init extends Digit[], infer Last extends Digit]
    ? [
          ...IncDigits<Init, 0, AddCarryMap[Cin][Last][Amt]>,
          AddMap[Cin][Last][Amt]
      ]
    : Cin extends 1
    ? [1]
    : [];
