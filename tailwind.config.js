/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        botplus: {
          navy: '#364f5e',
          blue: '#4b789b',
          aqua: '#6cbed0',
          ice: '#eff8fb'
        }
      }
    }
  },
  plugins: []
};
