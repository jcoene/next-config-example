import getConfig from "next/config";

import Interactive from "./Interactive";

export default async function HomePage() {
  const config = getConfig() || {};
  return (
    <div>
      <div style={{ border: "1px solid green", padding: "1em" }}>
        <div>
          <b>HomePage (Server Component, getConfig)</b>
        </div>
        <div>{JSON.stringify(config)}</div>
      </div>

      <div>
        <Interactive />
      </div>
    </div>
  );
}
