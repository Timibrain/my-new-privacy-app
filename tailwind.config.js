/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")], // <--- MAKE SURE THIS IS HERE
    theme: {
        extend: {},
    },
    plugins: [],
}