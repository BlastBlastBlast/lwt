/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'JetBrainsMono Nerd Font'", "'JetBrains Mono'", 'monospace'],
        mono: ["'JetBrainsMono Nerd Font Mono'", "'JetBrains Mono'", 'monospace'],
        marcellus: ['Marcellus', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        // Your custom colors
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
