"use client";

import getConfig from "next/config";
import { getExpected } from "../lib/expect";

export default function Interactive() {
  const got = getConfig();
  const expected = getExpected(false);
  return (
    <div>
      <div style={{ border: "1px solid blue", padding: "1em" }}>
        <div>
          <b>Interactive (Client Component, via getConfig)</b>
        </div>
        <div>
          Got: <code>{JSON.stringify(got)}</code>
        </div>
        <div>
          Expected: <code>{JSON.stringify(expected)}</code>
        </div>
      </div>
      <InteractiveChild got={got} expected={expected} />
    </div>
  );
}

function InteractiveChild({ got, expected }: { got: any; expected: any }) {
  return (
    <div style={{ border: "1px solid purple", padding: "1em" }}>
      <div>
        <b>InteractiveChild (Client Component, via props)</b>
      </div>
      <div>
        Got: <code>{JSON.stringify(got)}</code>
      </div>
      <div>
        Expected: <code>{JSON.stringify(expected)}</code>
      </div>
    </div>
  );
}
