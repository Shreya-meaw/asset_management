import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        futuristic: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Neon colors for the asset management app
        neon: {
          blue: "hsl(var(--neon-blue))",
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          pink: "hsl(var(--neon-pink))",
          green: "hsl(var(--neon-green))",
          orange: "hsl(var(--neon-orange))",
          red: "hsl(var(--neon-red))",
        },
        dark: {
          primary: "hsl(var(--dark-primary))",
          secondary: "hsl(var(--dark-secondary))",
          accent: "hsl(var(--dark-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "neon-blue":
          "0 0 5px hsl(var(--neon-blue)), 0 0 20px hsl(var(--neon-blue)), 0 0 35px hsl(var(--neon-blue))",
        "neon-cyan":
          "0 0 5px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 35px hsl(var(--neon-cyan))",
        "neon-purple":
          "0 0 5px hsl(var(--neon-purple)), 0 0 20px hsl(var(--neon-purple)), 0 0 35px hsl(var(--neon-purple))",
        "neon-pink":
          "0 0 5px hsl(var(--neon-pink)), 0 0 20px hsl(var(--neon-pink)), 0 0 35px hsl(var(--neon-pink))",
        "neon-green":
          "0 0 5px hsl(var(--neon-green)), 0 0 20px hsl(var(--neon-green)), 0 0 35px hsl(var(--neon-green))",
        "neon-orange":
          "0 0 5px hsl(var(--neon-orange)), 0 0 20px hsl(var(--neon-orange)), 0 0 35px hsl(var(--neon-orange))",
        "neon-red":
          "0 0 5px hsl(var(--neon-red)), 0 0 20px hsl(var(--neon-red)), 0 0 35px hsl(var(--neon-red))",
        "glow-sm": "0 0 10px rgba(0, 255, 255, 0.3)",
        "glow-md": "0 0 20px rgba(0, 255, 255, 0.4)",
        "glow-lg": "0 0 30px rgba(0, 255, 255, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-gradient":
          "linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)",
        "neon-gradient":
          "linear-gradient(45deg, hsl(var(--neon-blue)), hsl(var(--neon-purple)), hsl(var(--neon-pink)))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor",
            opacity: "1",
          },
          "50%": {
            boxShadow:
              "0 0 2px currentColor, 0 0 10px currentColor, 0 0 20px currentColor",
            opacity: "0.8",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": {
            filter: "brightness(1) drop-shadow(0 0 10px currentColor)",
          },
          "50%": {
            filter: "brightness(1.2) drop-shadow(0 0 20px currentColor)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
