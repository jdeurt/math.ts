import type { Digit } from "../primitive/digit";
import type { ToNumber } from "./to-number";

type _Deserialize<D extends Digit[]> = D extends [
    infer H extends Digit,
    ...infer T extends Digit[]
]
    ? `${H}${_Deserialize<T>}`
    : "";

export type Deserialize<D extends Digit[], S extends "" | "-" = ""> = ToNumber<
    S extends "-" ? `-${_Deserialize<D>}` : _Deserialize<D>
>;
