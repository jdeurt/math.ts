export type ToNumber<S extends string> = S extends `${infer N extends number}`
    ? N
    : never;
