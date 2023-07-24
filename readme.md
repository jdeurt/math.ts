# math.ts

Utility types for numbers.

```ts
import { Parse } from "@jdeurt/math.ts";

type Result = Parse<"1 + 2 * 3 - 4">; // -3

type Range<A extends number, B extends number> = A extends B
    ? [A]
    : [A, ...Range<Add<A, 1>, B>];

type SomeRange = Range<1, 5>; // [1, 2, 3, 4, 5]
```

## License

MIT © [Juan de Urtubey](https://jdeurt.xyz)
