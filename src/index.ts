import type { Deserialize } from "./helpers/deserialize";
import type { Invert } from "./helpers/invert";
import type { NormalizeString } from "./helpers/normalize";
import type { Or } from "./helpers/or";
import type { Serialize, SerializedNumber } from "./helpers/serialize";
import type { ToNumber } from "./helpers/to-number";
import type { AddDigits } from "./operations/add";
import type { CompareDigits } from "./operations/comparisons";
import type { DivDigits } from "./operations/div";
import type { MulDigits } from "./operations/mul";
import type { SubDigits } from "./operations/sub";
import type { Sign } from "./primitive/sign";

export type Add<
    A extends number,
    B extends number
> = Serialize<A> extends SerializedNumber<Sign.POSITIVE, infer DA>
    ? Serialize<B> extends SerializedNumber<Sign.POSITIVE, infer DB> // A >= 0 && B >= 0
        ? Deserialize<AddDigits<DA, DB>>
        : Serialize<B> extends SerializedNumber<Sign.NEGATIVE, infer DB> // A >= 0 && B < 0
        ? CompareDigits<DA, DB> extends -1
            ? Deserialize<SubDigits<DB, DA>, Sign.NEGATIVE> // |B| > |A|
            : Deserialize<SubDigits<DA, DB>> // |A| >= |B|
        : never
    : Serialize<A> extends SerializedNumber<Sign.NEGATIVE, infer DA>
    ? Serialize<B> extends SerializedNumber<Sign.POSITIVE, infer DB> // A < 0 && B >= 0
        ? CompareDigits<DA, DB> extends 1
            ? Deserialize<SubDigits<DA, DB>, Sign.NEGATIVE> // |A| > |B|
            : Deserialize<SubDigits<DB, DA>> // |B| >= |A|
        : Serialize<B> extends SerializedNumber<Sign.NEGATIVE, infer DB> // A < 0 && B < 0
        ? Deserialize<AddDigits<DA, DB>, Sign.NEGATIVE>
        : never
    : never;

export type Sub<A extends number, B extends number> = Add<A, Invert<B>>;

export type Mul<A extends number, B extends number> = [
    Serialize<A>,
    Serialize<B>
] extends [
    SerializedNumber<infer SA, infer DA>,
    SerializedNumber<infer SB, infer DB>
]
    ? SA extends SB
        ? Deserialize<MulDigits<DA, DB>>
        : Deserialize<MulDigits<DA, DB>, Sign.NEGATIVE>
    : never;

export type Div<A extends number, B extends number> = [
    Serialize<A>,
    Serialize<B>
] extends [
    SerializedNumber<infer SA, infer DA>,
    SerializedNumber<infer SB, infer DB>
]
    ? SA extends SB
        ? Deserialize<DivDigits<DA, DB>[0]>
        : Deserialize<DivDigits<DA, DB>[0], Sign.NEGATIVE>
    : never;

export type Mod<A extends number, B extends number> = [
    Serialize<A>,
    Serialize<B>
] extends [
    SerializedNumber<infer _, infer DA>,
    SerializedNumber<infer _, infer DB>
]
    ? Deserialize<DivDigits<DA, DB>[1]>
    : never;

export type Eq<A extends number, B extends number> = A extends B ? 1 : 0;

export type Gt<A extends number, B extends number> = [
    Serialize<A>,
    Serialize<B>
] extends [
    SerializedNumber<infer SA, infer DA>,
    SerializedNumber<infer SB, infer DB>
]
    ? SA extends SB
        ? CompareDigits<DA, DB> extends 1
            ? 1
            : 0
        : SA extends Sign.POSITIVE
        ? 1
        : -1
    : never;

export type Lt<A extends number, B extends number> = Gt<B, A>;

export type Gte<A extends number, B extends number> = Or<Eq<A, B> | Gt<A, B>>;

export type Lte<A extends number, B extends number> = Or<Eq<A, B> | Lt<A, B>>;

type Range<A extends number, B extends number> = A extends B
    ? [A]
    : [A, ...Range<Add<A, 1>, B>];

export type Parse<Expr extends string> = NormalizeString<Expr> extends infer N
    ? N extends `${infer A}..${infer B}` // A..B
        ? Range<Parse<A>, Parse<B>>
        : N extends `${infer A}==${infer B}` // A == B
        ? Eq<Parse<A>, Parse<B>>
        : N extends `${infer A}>${infer B}` // A > B
        ? Gt<Parse<A>, Parse<B>>
        : N extends `${infer A}<${infer B}` // A < B
        ? Lt<Parse<A>, Parse<B>>
        : N extends `${infer A}>=${infer B}` // A >= B
        ? Gte<Parse<A>, Parse<B>>
        : N extends `${infer A}<=${infer B}` // A <= B
        ? Lte<Parse<A>, Parse<B>>
        : N extends `${infer A}+${infer B}` // A + B
        ? Add<Parse<A>, Parse<B>>
        : N extends `${infer A}-${infer B}` // A - B
        ? Sub<Parse<A>, Parse<B>>
        : N extends `${infer A}*${infer B}` // A * B
        ? Mul<Parse<A>, Parse<B>>
        : N extends `${infer A}/${infer B}` // A / B
        ? Div<Parse<A>, Parse<B>>
        : N extends `${infer A}%${infer B}` // A % B
        ? Mod<Parse<A>, Parse<B>>
        : N extends `~${infer A}` // -A
        ? Invert<Parse<A>>
        : N extends `${infer A}` // A
        ? ToNumber<A>
        : never
    : never;

export type E<Expr extends string> = Parse<Expr>;
