const nextConfig = require("../next.config");

export function getExpected(includeServer: boolean): any {
  const expect: any = {};
  expect.publicRuntimeConfig = nextConfig.publicRuntimeConfig || {};
  if (includeServer) {
    expect.serverRuntimeConfig = nextConfig.serverRuntimeConfig || {};
  }
  return expect;
}
