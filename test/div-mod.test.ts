import test from "ava";

import { Div, Mod } from "../src";
import { expectEq } from "./helpers/expect";

test("Div/Mod", (t) => {
    expectEq<Div<2, 4>, 0>;
    expectEq<Div<4, 2>, 2>;
    expectEq<Div<6, 1>, 6>;
    expectEq<Div<11, 5>, 2>;
    expectEq<Div<-100, 10>, -10>;
    expectEq<Div<100, 10>, 10>;
    expectEq<Div<100, -10>, -10>;

    expectEq<Mod<2, 4>, 2>;
    expectEq<Mod<4, 2>, 0>;
    expectEq<Mod<6, 1>, 0>;
    expectEq<Mod<11, 5>, 1>;
    expectEq<Mod<-100, 10>, 0>;
    expectEq<Mod<100, 10>, 0>;
    expectEq<Mod<100, -10>, 0>;

    t.true(true);
});
