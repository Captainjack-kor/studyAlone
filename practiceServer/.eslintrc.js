// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:vue/essential"
//     ],
//     "parserOptions": {
//         "ecmaVersion": 13,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue"
//     ],
//     "rules": {
//     }
// };


module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
      parser: "babel-eslint"
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      'vue/multi-word-component-names': ['error', {
        'ignores': ['Home', 'Contents', 'Nap', 'Info']
      }]
    }
  };
  