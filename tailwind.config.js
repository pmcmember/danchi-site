module.exports = {
  mode: "jit",
  // tailwindcss対象ディレクトリ
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media",
  content: [],
  theme: {
    extend: {},
    // responseカスタマイズ
    screens: {
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'sm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }

      'rxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'rlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'rmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'rsm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
