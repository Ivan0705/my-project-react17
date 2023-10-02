module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "__IS_DEV__": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": 'module',
    },
    "plugins": [
        "react",
        "i18next",
        "@typescript-eslint"
    ],
    "parser": '@typescript-eslint/parser',
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],
        'max-len': ['error', {ignoreComments: true}]
    }
};
