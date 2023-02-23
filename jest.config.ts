export default {
  clearMocks: true,
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};