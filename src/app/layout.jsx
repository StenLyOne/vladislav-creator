import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local";
import { Manrope } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieConsentRuntime } from "../components/cookie/CookieConsentRuntime";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "./fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal"],
})

export const metadata = {
  title: "Vlad Creator",
  description: "Portfolio of Vladislav — UX/UI designer and full-stack developer.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.className} ${manrope.className}`}>
        <CookieConsentRuntime />
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
