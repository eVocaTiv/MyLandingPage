module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-parens": [ 'ERROR', "always" ],
        "arrow-spacing": [ 'ERROR', { "before": true, "after": true }],
        "max-len": [ 'WARN', 132 ],
        "comma-style": [ 'WARN', "last" ],
        "brace-style": [ 'WARN', "1tbs", { "allowSingleLine": false } ],
        "no-trailing-spaces": 'WARN',
    },
    extends: `react-app`,
};