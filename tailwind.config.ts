import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#B08030",
        "gold-light": "#E0D090",
        "gold-deep": "#8A6420",
        bronze: "#704010",
        "brown-900": "#1A130B",
        bg: "#0E0B08",
        surface: "#1A130B",
        text: "#F5EFE2",
        muted: "#B8AC95",
        danger: "#C0532A",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        eyebrow: ["Cinzel", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        pill: "999px",
      },
      boxShadow: {
        "glow-gold": "0 0 24px rgba(176,128,48,0.25)",
        card: "0 8px 24px rgba(0,0,0,0.45)",
      },
      maxWidth: {
        wrap: "720px",
        narrow: "640px",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(120% 80% at 50% 0%, rgba(176,128,48,.10), transparent 60%)",
        "final-glow":
          "radial-gradient(120% 90% at 50% 100%, rgba(176,128,48,.12), transparent 60%)",
        "tint-grad": "linear-gradient(180deg,#120D08,#0E0B08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
