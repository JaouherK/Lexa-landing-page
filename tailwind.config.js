/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        'lexa-bg': '#050505',
        'lexa-bg-gradient': '#0a0a0a',
        'lexa-card': '#0c0c0c',
        'lexa-card-hover': '#141414',
        'lexa-accent': '#ffffff',
        'lexa-accent-muted': '#a1a1aa',
        'lexa-text': '#71717a',
        'lexa-text-light': '#a1a1aa',
        'lexa-border': 'rgba(255, 255, 255, 0.08)',
        'lexa-border-light': 'rgba(255, 255, 255, 0.12)',
        'lexa-glass': 'rgba(255, 255, 255, 0.02)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'serif': ['Instrument Serif', 'serif'],
      },
      borderRadius: {
        'card': '20px',
        'btn': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
      }
    }
  },
  plugins: [],
}
