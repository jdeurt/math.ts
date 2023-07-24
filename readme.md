# math.ts

A type-level arithmetic expression parser written in Typescript.

```ts
import { Parse } from "math.ts";

type Result = Parse<"1 + 2 * 3 - 4">; // -3
```

## License

MIT © [Juan de Urtubey](https://jdeurt.xyz)
