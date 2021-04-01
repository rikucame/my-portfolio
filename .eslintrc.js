module.exports = {
  "settings":{
      "react":{
          "version": require('./package.json').dependencies.react
      },
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "prettier",
      "prettier/@typescript-eslint",
      "eslint-config-prettier"
  ],
  "plugins": [
      "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "parserOptions": {
      "sourceType": "module",
      "project": "./tsconfig.json"
  },
  "rules": {
      "prettier/prettier": [
          "error",
          {
              "semi": true,
              "singleQuote": true,
              "printWidth": 120,
              "trailingComma": "es5",
              "tabWidth": 2,
              "semi": true,
              "singleQuote": true,
          }
      ],
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/prefer-interface": "off",
      "@typescript-eslint/no-object-literal-type-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-parameter-properties":"off",
      "react/prop-types": "off",
      "linebreak-style": [
          "error",
          "unix"
      ]
  }
}