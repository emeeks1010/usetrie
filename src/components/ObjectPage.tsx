import * as React from "react";
import { Link } from "@reach/router";
import useTrie from "@cshooks/usetrie";

import Demo from "./Demo";

function ObjectPage() {
  const words = [
    { id: 1, text: "abcd", meta: "1 - abcd" },
    { id: 2, text: "abce", meta: "2 - abce" },
    { id: 3, text: "ABC", meta: "3 - ABC" },
    { id: 4, text: "THE", meta: "4 - THE" },
    { id: 5, text: "their", meta: "5 - their" },
    { id: 6, text: "there", meta: "6 - there" },
    { id: 7, text: "hel", meta: "7 - hel" },
    { id: 8, text: "hell", meta: "8 - hell" },
    { id: 9, text: "hello", meta: "9 - hello" },
    { id: 10, text: "help", meta: "10 - help" },
    { id: 11, text: "helping", meta: "11 - helping" },
    { id: 12, text: "helps", meta: "12 - helps" }
  ];

  return <Demo title="🥔 Object Array Demo" words={words} />;
}

export default ObjectPage;
