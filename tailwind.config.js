/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/src/style/style.css","index.php"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i src/style/tailwind.css  -o src/style/style.css --watch