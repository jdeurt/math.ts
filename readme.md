# @jdeurt/math.ts

Utility types for numbers.

## Installation

```bash
npm install @jdeurt/math.ts
```

## Usage

```ts
import { E } from "@jdeurt/math.ts";

type Range1To10 = E<"1..10">; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type ResultOfSomeNestedExpression = E<`${E<"1 + 2">} * 3 - 4`>; // (1 + 2) * 3 - 4 = 5
```

## TODO

-   Add division operator
-   Add modulo operator
-   Add exponentiation operator
-   Add grouped expression support to parser via parens

## License

MIT © [Juan de Urtubey](https://jdeurt.xyz)
