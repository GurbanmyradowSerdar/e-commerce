import BagIcon from "@/components/cards/about_card/icons/BagIcon";
import MoneyBagIcon from "@/components/cards/about_card/icons/MoneyBagIcon";
import MoneyIcon from "@/components/cards/about_card/icons/MoneyIcon";
import ServiceIcon from "@/components/cards/about_card/icons/ServiceIcon";
import {
  IAboutCard,
  IAboutEmployeeCard,
  IFooterLink,
  IHeaderLink,
  IServiceCard,
} from "types";

// ! header
export const headerNav: IHeaderLink[] = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "contact",
    href: "/contact",
  },
  {
    text: "about",
    href: "/about",
  },
  {
    text: "sign up",
    href: "/sign-up",
  },
];

// ! footer
export const footerNav: IFooterLink[] = [
  {
    text: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
    href: "https://www.google.com/maps/search/111+Bijoy+sarani,+Dhaka,++DH+1515,+Bangladesh./@23.7643021,90.3864755,17z/data=!3m1!4b1?entry=ttu",
  },
  {
    text: "exclusive@gmail.com",
    href: "malito:exclusive@gmail.com",
  },
  {
    text: "+88015-88888-9999",
    href: "tel:+88015-88888-9999",
  },
];
export const footerNav1: IFooterLink[] = [
  {
    text: "My Account",
    href: "account",
  },
  {
    text: "Login / Register",
    href: "account",
  },
  {
    text: "Cart",
    href: "cart",
  },
  {
    text: "Wishlist",
    href: "wishlist",
  },
  {
    text: "Shop",
    href: "shop",
  },
];
export const footerNav2: IFooterLink[] = [
  {
    text: "Privacy Policy",
    href: "privacy-policy",
  },
  {
    text: "Terms of Use",
    href: "#",
  },
  {
    text: "FAQ",
    href: "faq",
  },
  {
    text: "Contact",
    href: "contact",
  },
];

// ! about card
export const aboutCards: IAboutCard[] = [
  {
    title: "10.5k",
    subtitle: "Sallers active our site",
    Icon: ServiceIcon(),
  },
  {
    title: "33k",
    subtitle: "Mopnthly Produduct Sale",
    Icon: MoneyIcon(),
  },
  {
    title: "45.5k",
    subtitle: "Customer active in our site",
    Icon: BagIcon(),
  },
  {
    title: "25k",
    subtitle: "Anual gross sale in our site",
    Icon: MoneyBagIcon(),
  },
];

// ! about services cards
export const aboutServicesCards: IServiceCard[] = [
  {
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over $140",
    image: "delivery.svg",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
    image: "support.svg",
  },
  {
    title: "MONEY BACK GUARANTEE",
    subtitle: "We reurn money within 30 days",
    image: "safety.svg",
  },
];

// ! about employee swiper
export const aboutEmployeeSwiper: IAboutEmployeeCard[] = [
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-1.png",
    name: "tom crouise",
    status: "founder & chairman",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-2.png",
    name: "emma watson",
    status: "managing director",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-3.png",
    name: "will smith",
    status: "product designer",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-1.png",
    name: "tom crouise",
    status: "founder & chairman",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-2.png",
    name: "emma watson",
    status: "managing director",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-3.png",
    name: "will smith",
    status: "product designer",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-1.png",
    name: "tom crouise",
    status: "founder & chairman",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-2.png",
    name: "emma watson",
    status: "managing director",
  },
  {
    href: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
    image: "employee-3.png",
    name: "will smith",
    status: "product designer",
  },
];
