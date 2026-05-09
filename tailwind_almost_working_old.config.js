/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EDE0',
        canopy: '#2F5D4F',
        leaf: '#4A8B6F',
        gold: '#E8B84B',
        coral: '#E07A5F',
        bark: '#3B2F26'
      },
      fontFamily: {
        body: ['Nunito', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        jungle: '0 18px 40px -16px rgba(47, 93, 79, 0.45)'
      }
    }
  },
  plugins: []
};
