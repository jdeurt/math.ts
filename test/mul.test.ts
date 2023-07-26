import test from "ava";

import { Mul } from "../src/";
import { expectEq } from "./helpers/expect";

test("Mul", (t) => {
    expectEq<Mul<1, 2>, 2>;
    expectEq<Mul<10, 10>, 100>;
    expectEq<Mul<-1, 100>, -100>;
    expectEq<Mul<1, -100>, -100>;
    expectEq<Mul<-2, -2>, 4>;

    t.true(true);
});
