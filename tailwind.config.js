/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic colors that change with theme
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",

        // Fixed accent colors
        accent: {
          purple: "#915eff",
          cyan: "#00cea8",
          pink: "#bf61ff",
          blue: "#6366f1",
          orange: "#f97316",
        },

        // Legacy support
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 20px rgba(145, 94, 255, 0.5)",
        "glow-lg": "0 0 40px rgba(145, 94, 255, 0.4)",
        "glow-cyan": "0 0 20px rgba(0, 206, 168, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "gradient": "gradient 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)",
            opacity: "1"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(145, 94, 255, 0.8)",
            opacity: "0.8"
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, rgba(5, 8, 22, 0) 0%, rgba(5, 8, 22, 1) 100%)",
      },
    },
  },
  plugins: [],
}