import getConfig from "next/config";
import { getExpected } from "../lib/expect";

import Interactive from "./Interactive";

export default async function HomePage() {
  const got = getConfig();
  const expected = getExpected(true);
  return (
    <div>
      <div style={{ border: "1px solid green", padding: "1em" }}>
        <div>
          <b>HomePage (Server Component, getConfig)</b>
        </div>
        <div>
          Got: <code>{JSON.stringify(got)}</code>
        </div>
        <div>
          Expected: <code>{JSON.stringify(expected)}</code>
        </div>
      </div>

      <div>
        <Interactive />
      </div>
    </div>
  );
}
