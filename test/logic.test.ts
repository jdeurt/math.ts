import test from "ava";

import { Eq, Lt, Lte, Gt, Gte } from "../src";
import { expectEq } from "./helpers/expect";

test("Logical", (t) => {
    expectEq<Eq<1, 1>, 1>;
    expectEq<Eq<-1, 1>, 0>;

    expectEq<Lt<3, 2>, 0>;
    expectEq<Lt<3, 3>, 0>;
    expectEq<Lt<3, 4>, 1>;
    expectEq<Lt<102323, 102324>, 1>;
    expectEq<Lt<-1, 1>, 1>;
    expectEq<Lt<-1, -1>, 0>;

    expectEq<Lte<3, 2>, 0>;
    expectEq<Lte<3, 3>, 1>;
    expectEq<Lte<3, 4>, 1>;
    expectEq<Lte<102323, 102324>, 1>;
    expectEq<Lte<-1, 1>, 1>;
    expectEq<Lte<-1, -1>, 1>;

    expectEq<Gt<3, 2>, 1>;
    expectEq<Gt<3, 3>, 0>;
    expectEq<Gt<3, 4>, 0>;
    expectEq<Gt<102323, 102324>, 0>;
    expectEq<Gt<-1, 1>, 0>;
    expectEq<Gt<-1, -1>, 0>;

    expectEq<Gte<3, 2>, 1>;
    expectEq<Gte<3, 3>, 1>;
    expectEq<Gte<3, 4>, 0>;
    expectEq<Gte<102323, 102324>, 0>;
    expectEq<Gte<-1, 1>, 0>;
    expectEq<Gte<-1, -1>, 1>;

    t.true(true);
});
