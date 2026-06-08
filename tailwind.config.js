export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#06131f',
        brand: '#2f84d5',
        accent: '#4dcccd',
        grass: '#5db370',
        soft: '#e5f8f3'
      },
      boxShadow: {
        glow: '0 25px 80px rgba(77, 204, 205, 0.14)'
      }
    }
  },
  plugins: []
};
