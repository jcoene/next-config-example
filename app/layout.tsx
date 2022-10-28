import getConfig from "next/config";
import { PropsWithChildren } from "react";
import { getExpected } from "../lib/expect";

import "../styles/globals.css";

export default async function Layout({ children }: PropsWithChildren) {
  const got = getConfig();
  const expected = getExpected(true);
  return (
    <html>
      <head>
        <title>Demo</title>
      </head>
      <body>
        <div style={{ border: "1px solid red", padding: "1em" }}>
          <div>
            <b>Layout (Server Component, getConfig)</b>
          </div>
          <div>
            Got: <code>{JSON.stringify(got)}</code>
          </div>
          <div>
            Expected: <code>{JSON.stringify(expected)}</code>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
