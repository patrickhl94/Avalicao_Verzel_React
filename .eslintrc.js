module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        'prettier',
        'prettier/react'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        'prettier/prettier': 'error',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] }
        ],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-unused-state': 'off',
        'react/state-in-constructor': 'off',
        'react/destructuring-assignment': 'off',
        'camelcase': 'off',
        'no-unused-vars': ['error', { 'argdIgnorePAtter': 'next' }],
        'linebreak-style': 0,
        'global-require': 0,
        'react/static-property-placement': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-plusplus': 'off',
        'no-unused-expressions': 'off',
        'react/jsx-props-no-spreading': 'off'
    }
};
