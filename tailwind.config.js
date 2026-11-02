/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: token('ink'),
        surface: token('surface'),
        line: token('line'),
        edge: token('edge'),
        fg: token('fg'),
        'fg-soft': token('fg-soft'),
        muted: token('muted'),
        faint: token('faint'),
        design: token('design'),
        code: token('code'),
        overlap: token('overlap'),
      },
    },
  },
  plugins: [],
};
