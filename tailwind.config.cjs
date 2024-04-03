/** @type {import('tailwindcss').Config} */
module.exports = {

    theme: {
        extend: {
          rotate: {
            '140': '140deg',
          }
        }
      },

    
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
  };