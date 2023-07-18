import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  rootDir: process.cwd(),
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    ".*\\.(tsx?)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default config;
