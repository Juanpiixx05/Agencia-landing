/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}',
    './public/**/*.{html,js}',
    './*.{html,js,astro}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',   // Blanco hueso
          100: '#f5f5f5',  // Gris muy claro
          200: '#e5e5e5',  // Gris claro
          300: '#d4d4d4',  // Gris medio-claro
          400: '#a3a3a3',  // Gris medio
          500: '#737373',  // Gris medio-oscuro
          600: '#525252',  // Gris oscuro
          700: '#404040',  // Gris grafito
          800: '#262626',  // Casi negro
          900: '#171717'   // Negro profundo
        },
        brand: {
          primary: '#0F172A',   // Azul marino oscuro
          secondary: '#1E293B',  // Azul grisáceo
          accent: '#334155'      // Gris azulado
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#262626',
            a: {
              color: '#0F172A',
              '&:hover': {
                color: '#334155'
              }
            }
          }
        }
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};