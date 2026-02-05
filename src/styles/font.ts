import localFont from "next/font/local";

// English font
export const englishFont = localFont({
  src: [
    {
      path: "../assets/fonts/sf-pro/sf-pro-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/sf-pro-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro/sf-pro-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-english",
  display: "swap",
});

// Khmer font
export const khmerFont = localFont({
  src: [
    {
      path: "../assets/fonts/krasar-pro/krasar-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/krasar-pro/krasar-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/krasar-pro/krasar-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-khmer",
  display: "swap",
});