import * as React from "react";
import { Link } from "@reach/router";
import useTrie from "@cshooks/usetrie";

import Demo from "./Demo";

function StringPage() {
  // prettier-ignore
  const words = [
    "abcd", "abce", "ABC", "THE", "their",
    "there", "hel", "hell", "hello", "help",
    "helping", "helps"
  ];

  return <Demo title="📏 String Array Demo" words={words} />;
}

export default StringPage;
