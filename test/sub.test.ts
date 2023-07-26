import test from "ava";

import { Sub } from "../src/";
import { expectEq } from "./helpers/expect";

test("Sub", (t) => {
    expectEq<Sub<1, 2>, -1>;
    expectEq<Sub<8, 7>, 1>;
    expectEq<Sub<9, 1>, 8>;
    expectEq<Sub<-1, 123>, -124>;
    expectEq<Sub<-1, -1>, 0>;
    expectEq<Sub<1, -10>, 11>;
    expectEq<Sub<9999999, 1>, 9999998>;

    t.true(true);
});
