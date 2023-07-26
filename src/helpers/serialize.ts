import type { Digit } from "../primitive/digit";
import type { Assert } from "./assert";
import type { ToString } from "./to-string";

export type SerializedNumber<
    S extends "" | "-" = "" | "-",
    D extends Digit[] = Digit[]
> = {
    readonly sign: S;
    readonly digits: D;
};

type _Serialize<N extends number | string> =
    ToString<N> extends `${infer H extends Digit}.${number}`
        ? [H]
        : ToString<N> extends `${infer H extends Digit}${infer T}`
        ? [H, ..._Serialize<T>]
        : [];

export type Serialize<N extends number> =
    ToString<N> extends `-${infer D extends number}`
        ? SerializedNumber<"-", _Serialize<D>>
        : ToString<N> extends `${infer D extends number}`
        ? SerializedNumber<"", _Serialize<D>>
        : never;
