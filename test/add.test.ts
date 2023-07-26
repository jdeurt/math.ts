import test from "ava";

import { Add } from "../src/";
import { expectEq } from "./helpers/expect";

test("Add", (t) => {
    expectEq<Add<1, 2>, 3>;
    expectEq<Add<8, 7>, 15>;
    expectEq<Add<9, 1>, 10>;
    expectEq<Add<-1, 123>, 122>;
    expectEq<Add<-1, -1>, -2>;
    expectEq<Add<1, -10>, -9>;
    expectEq<Add<9999999, 1>, 10000000>;

    t.true(true);
});
