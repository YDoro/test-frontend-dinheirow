import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  rootDir: process.cwd(),
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
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
