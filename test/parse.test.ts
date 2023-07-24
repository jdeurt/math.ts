import test from "ava";

import { E } from "../src/";

function expect<T extends U, U>(x?: U): asserts x is T {}

test("Parse", (t) => {
    expect<E<"1 + 1">, 2>();
    expect<E<"1 * 2">, 2>();
    expect<E<"1..5">, [1, 2, 3, 4, 5]>();
    expect<E<"1 + 3 * 4 > 7">, 1>();
    expect<E<`${E<"1 + 3 * 4 > 7">}..2`>, [1, 2]>();

    t.true(true);
});
