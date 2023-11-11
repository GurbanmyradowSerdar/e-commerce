import { Poppins, Inter } from "next/font/google";

const poppinsRegularFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppinsSemiBoldFont = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const poppinsMediumFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const interBoldFont = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export {
  poppinsRegularFont,
  poppinsSemiBoldFont,
  poppinsMediumFont,
  interBoldFont,
};
