/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        30: "7.5rem",
      },
      fontFamily: {
        sen: "'Sen', sans-serif",
      },
      colors: {
        "gray-800": "#202223",
        "gray-700": "#344054",
        "gray-600": "#667085",
        "gray-500": "#98a2b3",
        "gray-400": "#d0d5dd",
        "gray-300": "#e4e7ec",
        "gray-200": "#f9f9f9",
        "gray-100": "#f9fafb",
        primary: "#EF1B48",
        starYellow: "#ffa000",
        lightPink: "#FEE1E7",
      },
      backgroundImage: () => ({
        spotify: "url('../images/spotify.png')",
        airbnb: "url('../images/airbnb.png')",
        booking: "url('../images/booking.com.png')",
        expedia: "url('../images/expedia.png')",
        spline: "url('../images/spline.png')",
        skyscanner: "url('../images/skyscanner.png')",
        alexey: "url('../images/alexey-artyukh-DLf3uwkRNPA-unsplash.jpg')",
        joshua: "url('../images/joshua-earle--87JyMb9ZfU-unsplash.jpg')",
        mick: "url('../images/mick-haupt-pg8k1mZPMRg-unsplash.jpg')",
        thom: "url('../images/thom-holmes-unsplash.png')",
        flag: "url('../images/flag.png')",
        network: "url('../images/Group.png')",
        intersect: "url('../images/intersect.png')",
      }),
    },
  },
  plugins: [],
};
