import getConfig from "next/config";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const config = getConfig() || {};
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
          <div>{JSON.stringify(config)}</div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
