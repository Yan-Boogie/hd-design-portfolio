import customTheme from '../theme';

export const parameters = {
  chakra: { theme: customTheme },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'brand',
    values: [{ name: 'brand', value: '#fef7de' }],
  },
}