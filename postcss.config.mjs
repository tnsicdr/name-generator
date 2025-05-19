import postcssPresetEnv from 'postcss-preset-env';
import postcssContrastColorFunction from '@csstools/postcss-contrast-color-function';

/** @type {import('postcss-load-config').Config} */
const postCssConfig = {
  plugins: [
    postcssContrastColorFunction({}),
    postcssPresetEnv({
      minimumVendorImplementations: 2,
      features: { 'nesting-rules': true },
    }),
  ],
};

export default postCssConfig;
