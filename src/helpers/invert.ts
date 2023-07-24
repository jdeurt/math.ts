import type { ToNumber } from "./to-number";
import type { ToString } from "./to-string";

export type Invert<N extends number> = ToNumber<`-${ToString<N>}`>;
