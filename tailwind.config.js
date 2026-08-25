/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },

    extend: {
      colors: {
        // Ink is sampled from the brand mark; it plays the role Spot gives
        // its --primary--black (#111820).
        ink: {
          DEFAULT: "#032139",
          muted: "#5A6B7C",
          soft: "#8A97A4",
        },
        // Accotomate orange in the structural role Spot gives its acid yellow:
        // full-bleed nav, footer, buttons and marquee. Always with ink text
        // (6.7:1); white on this fails AA at 2.5:1.
        accent: {
          DEFAULT: "#FA8705",
          hover: "#E07A04",
          soft: "#FFF4E6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F6F7F9",
          // Warm neutral, the counterpart to Spot's --secondary--rock.
          stone: "#E9E6DD",
        },
        line: {
          DEFAULT: "#E2E1DA",
          strong: "#CFCDC3",
          inverse: "rgba(255, 255, 255, 0.16)",
          onAccent: "rgba(3, 33, 57, 0.18)",
        },
      },

      fontFamily: {
        // Stand-ins for Raptortext / Raptormono, which are licensed faces.
        sans: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      fontSize: {
        // Spot's h1 is 7rem at line-height .93 — the single biggest reason
        // its pages read the way they do.
        display: [
          "clamp(3rem, 9vw, 7rem)",
          { lineHeight: "0.93", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        h2: [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.375rem, 2.2vw, 1.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        lede: ["1.25rem", { lineHeight: "1.5" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        stat: [
          "clamp(3rem, 6vw, 5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        // Monospace label — uppercase, tracked out. Spot's most repeated device.
        label: [
          "0.8125rem",
          { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        "label-lg": [
          "1rem",
          { lineHeight: "1.3", letterSpacing: "0.06em", fontWeight: "500" },
        ],
      },

      borderRadius: {
        none: "0",
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        pill: "100vw",
        full: "9999px",
      },

      boxShadow: {
        raise: "0 1px 2px rgba(3, 33, 57, 0.06), 0 6px 20px rgba(3, 33, 57, 0.07)",
        pop: "0 2px 6px rgba(3, 33, 57, 0.08), 0 18px 44px rgba(3, 33, 57, 0.12)",
      },

      maxWidth: {
        prose: "62ch",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
