module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals"
  ],
  "rules": {
    "semi": ["error", "always"],
    "singleQuote": ["error", "always"],
    "jsxSingleQuote": ["error", "always"],
    "no-array-constructor": "off",
    "no-unused-vars": "off",
    "no-loss-of-precision": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "no-implicit-coercion": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        "checkCompoundAssignments": true,
        "allowBoolean": false,
        "allowNullish": false,
        "allowNumberAndString": false,
        "allowRegExp": false,
        "allowAny": false
      }
    ],
    "prefer-template": "error",
    "import/no-cycle": "error",
    "import/newline-after-import": "error",
  }
}
