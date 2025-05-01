import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: [
    "@/components/**/*.{vue,js,ts}",
    "@/layouts/**/*.vue",
    "@/pages/**/*.vue",
    "@/composables/**/*.{js,ts}",
    "@/plugins/**/*.{js,ts}",
    "@/App.{js,ts,vue}",
    "@/app.{js,ts,vue}",
    "@/Error.{js,ts,vue}",
    "@/error.{js,ts,vue}"
  ],
  // darkMode: "class"
};
