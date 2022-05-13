module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: 'rgb(31 31 31)',
        gray1: 'rgba(255,255,255,1)',
        gray2: 'rgb(37 37 37)',
        gray3: 'rgb(0 0 0)',
        white1: 'rgb(238 238 238)',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
      },
    },
  },
  plugins: [],
}
