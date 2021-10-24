module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
   ".eslintrc.js",
   ".prettierrc.js"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "require-jsdoc": 0,
    "no-duplicate-case": "error",
    "object-curly-spacing": ["error", "always", { "arraysInObjects": true }],
    "import/no-unassigned-import": ["error", { "allow": ["module-alias/register"] }],
    "no-duplicate-imports": "error",
    "quotes": ["error", "single", { "avoidEscape": true }],
    "import/no-unresolved": 0,
    "indent": ["error", 2]
  },
};
