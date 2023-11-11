import { Poppins, Inter } from "next/font/google";

const poppinsRegularFont = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const poppinsSemiBoldFont = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const interBoldFont = Inter({
  weight: "700",
  subsets: ["latin"],
});
export { poppinsRegularFont, poppinsSemiBoldFont, interBoldFont };
