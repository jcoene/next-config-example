"use client";

import getConfig from "next/config";

export default function Interactive() {
  const config = getConfig() || {};
  return (
    <div>
      <div style={{ border: "1px solid blue", padding: "1em" }}>
        <div>
          <b>Interactive (Client Component, getConfig)</b>
        </div>
        <div>{JSON.stringify(config)}</div>
      </div>
      <InteractiveChild config={config} />
    </div>
  );
}

function InteractiveChild({ config }: { config: any }) {
  return (
    <div style={{ border: "1px solid purple", padding: "1em" }}>
      <div>
        <b>InteractiveChild (Client Component, props)</b>
      </div>
      <div>{JSON.stringify(config)}</div>
    </div>
  );
}
