const path = require('path');

module.exports = {
  stories: ['../src/shared/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-notes/register-panel',
  ],
};
