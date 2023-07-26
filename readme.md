# @jdeurt/math.ts

Utility types for numbers.

## Installation

```bash
npm install @jdeurt/math.ts
```

## API

Number types passed to any of the following utility types are casted to integers. For example, `Add<5, 3.5>` will return `8`.

### int A, int B => Add A B -> int

Adds integers A and B and returns the result.

```ts
type Result = Add<5, 3>; // 8
```

### int A, int B => Sub A B -> int

Subtracts integer B from A and returns the result.

```ts
type Result = Sub<5, 3>; // 2
```

### int A, int B => Mul A B -> int

Multiplies integers A and B and returns the result.

```ts
type Result = Mul<5, 3>; // 15
```

### int A, int B => Div A B -> int

Divides integer A by integer B and returns the result.

```ts
type Result = Div<10, 2>; // 5
```

### int A, int B => Mod A B -> int

Finds the modulus of integer A by B and returns the result.

```ts
type Result = Mod<10, 3>; // 1
```

### int A, int B => Pow A B -> int

Raises integer A to the power of B and returns the result.

```ts
type Result = Pow<2, 3>; // 8
```

### int A, int B => Eq A B -> int

Checks if integer A is equal to B and returns 1 if true, otherwise 0.

```ts
type Result = Eq<5, 5>; // 1
```

### int A, int B => Gt A B -> int

Checks if integer A is greater than B and returns 1 if true, otherwise 0.

```ts
type Result = Gt<5, 3>; // 1
```

### int A, int B => Lt A B -> int

Checks if integer A is less than B and returns 1 if true, otherwise 0.

```ts
type Result = Lt<5, 7>; // 1
```

### int A, int B => Gte A B -> int

Checks if integer A is greater than or equal to B and returns 1 if true, otherwise 0.

```ts
type Result = Gte<5, 5>; // 1
```

### int A, int B => Lte A B -> int

Checks if integer A is less than or equal to B and returns 1 if true, otherwise 0.

```ts
type Result = Lte<5, 7>; // 1
```

## License

MIT © [Juan de Urtubey](https://sharky.foo)
