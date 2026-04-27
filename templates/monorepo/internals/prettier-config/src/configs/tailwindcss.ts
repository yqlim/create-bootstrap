import type { Config } from 'prettier';
import type { PluginOptions } from 'prettier-plugin-tailwindcss';

/**
 * Must be the last config entry. See the referenced link for more details.
 *
 * If you are using Tailwind v4 and later, you are required to configure the
 * `tailwindStylesheet` option.
 *
 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
 */
export const config: Config & PluginOptions = {
  plugins: ['prettier-plugin-tailwindcss'],
};
