const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  // Aturan rekomendasi ESLint
  js.configs.recommended,

  // Konfigurasi umum JavaScript dan Node.js
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: ['error', 'always']
    }
  },

  // Konfigurasi khusus Jest
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: globals.jest
    }
  },

  // Konfigurasi khusus runtime k6
  {
    files: ['loadtest/**/*.js'],
    languageOptions: {
      globals: {
        __ENV: 'readonly'
      }
    }
  }
];
