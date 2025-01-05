import { Cinzel, EB_Garamond } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // specify the weights you need
  variable: "--font-cinzel", // optional CSS variable
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ebgaramond",
});
