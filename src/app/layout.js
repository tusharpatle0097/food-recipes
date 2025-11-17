import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { FoodProvider } from "./context/FoodContext";
import Footer from "@/ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    default: "Food Recipe | Discover & Cook Delicious Recipes",
    template: "%s | Food Recipe",
  },
  description:
    "Explore thousands of delicious recipes, discover meals by category and cuisine, and cook with step-by-step instructions. Simple, fast, and perfect for everyday cooking.",
  keywords: [
    "food recipes",
    "easy recipes",
    "cooking guide",
    "meal inspiration",
    "home cooking",
    "recipe search",
    "cook food",
    "kitchen ideas",
  ],
  authors: [{ name: "Tushar Patle" }],
  creator: "Food Recipe",
  publisher: "Food Recipe",
  metadataBase: new URL("https://www.mealrecepie.fun/"),
  openGraph: {
    title: "Food Recipe | Discover & Cook Delicious Recipes",
    description:
      "Search, explore, and cook meals with clear step-by-step recipes and ingredients.",
    url: "https://www.mealrecepie.fun/",
    siteName: "Food Recipe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Food Recipe Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Food & Cooking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <FoodProvider>
          {children} <Footer />
        </FoodProvider>
      </body>
    </html>
  );
}
