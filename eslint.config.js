import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import htmlPlugin from 'eslint-plugin-html';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    // Apply to JavaScript and HTML files
    files: ['**/*.{js,jsx,html}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      html: htmlPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed in modern React
      'no-unused-vars': 'warn',
    },
  },
  // Must be last to override conflicting formatting rules
  configPrettier,
];
