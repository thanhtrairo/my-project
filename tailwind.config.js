module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: 'rgb(31 31 31)',
        black1: 'rgb(18 18 18)',
        gray1: 'rgba(255,255,255,1)',
        gray2: 'rgb(37 37 37)',
        gray3: 'rgb(0 0 0)',
        gray4: 'rgb(26 26 26)',
        white1: 'rgb(238 238 238)',
        white2: 'rgb(44 44 44)',
        white3: 'rgb(60 60 60)',
        white4: 'rgb(255 255 255 / 20%)',
        blackOver: 'rgba(24, 23, 23, 0.4)',
        blue1: 'rgb(87 153 239)',
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
