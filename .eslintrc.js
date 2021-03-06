module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [
        {
            "files": ["*.vue"],
            "rules": {
                "vue/html-indent": "off",
                "vue/script-indent": "off"
            }
        },
        {
            "files": ["*.ts"],
            "rules": {
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ]
};
