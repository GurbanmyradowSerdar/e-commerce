import BagIcon from "@/components/cards/about_card/icons/BagIcon";
import MoneyBagIcon from "@/components/cards/about_card/icons/MoneyBagIcon";
import MoneyIcon from "@/components/cards/about_card/icons/MoneyIcon";
import ServiceIcon from "@/components/cards/about_card/icons/ServiceIcon";
import CameraIcon from "@/components/cards/category_card/icons/CameraIcon";
import ComputerIcon from "@/components/cards/category_card/icons/ComputerIcon";
import GamingIcon from "@/components/cards/category_card/icons/GamingIcon";
import HeadPhonesIcon from "@/components/cards/category_card/icons/HeadPhonesIcon";
import PhoneIcon from "@/components/cards/category_card/icons/PhoneIcon";
import WatchIcon from "@/components/cards/category_card/icons/WatchIcon";
import {
  IAboutCard,
  IAboutEmployeeCard,
  ICategoryCard,
  IFooterLink,
  IHeaderLink,
  IHomeSideBarMenuLink,
  INameAndHref,
  IProductCard,
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

// ! home page banners at start
export const homeBanners = [
  "banner.png",
  "banner.png",
  "banner.png",
  "banner.png",
  "banner.png",
];

// ! home page banners > sidebar > link items
export const homeSideBarItems: [INameAndHref[], IHomeSideBarMenuLink[]] = [
  [
    {
      href: "electronics",
      name: "electronics",
    },
    {
      href: "home-lifestyle",
      name: "home & lifestyle",
    },
    {
      href: "medicine",
      name: "medicine",
    },
    {
      href: "sport-outdoor",
      name: "sport & outdoor",
    },
    {
      href: "baby-toys",
      name: "baby's & toys",
    },
    {
      href: "groceries-pets",
      name: "groceries & pets",
    },
    {
      href: "health-beauty",
      name: "health & beauty",
    },
  ],
  [
    {
      menuItems: [
        { href: "dress", name: "dress" },
        { href: "skirt", name: "skirt" },
        { href: "blouse", name: "blouse" },
        { href: "pants", name: "pants" },
        { href: "jacket", name: "jacket" },
        { href: "coat", name: "coat" },
        { href: "sweater", name: "sweater" },
        { href: "top", name: "top" },
        { href: "jeans", name: "jeans" },
        { href: "shorts", name: "shorts" },
        { href: "scarf", name: "scarf" },
        { href: "sunglasses", name: "sunglasses" },
        { href: "hat", name: "hat" },
        { href: "heels", name: "heels" },
        { href: "flats", name: "flats" },
        { href: "boots", name: "boots" },
        { href: "sandals", name: "sandals" },
        { href: "handbag", name: "handbag" },
        { href: "clutch", name: "clutch" },
        { href: "necklace", name: "necklace" },
      ],
      menuName: "woman's fashion",
    },
    {
      menuItems: [
        { href: "shirt", name: "shirt" },
        { href: "t-shirt", name: "t-shirt" },
        { href: "polo", name: "polo" },
        { href: "sweater", name: "sweater" },
        { href: "hoodie", name: "hoodie" },
        { href: "jacket", name: "jacket" },
        { href: "coat", name: "coat" },
        { href: "blazer", name: "blazer" },
        { href: "pants", name: "pants" },
        { href: "jeans", name: "jeans" },
        { href: "shorts", name: "shorts" },
        { href: "sweatpants", name: "sweatpants" },
        { href: "suits", name: "suits" },
        { href: "tie", name: "tie" },
        { href: "bowtie", name: "bowtie" },
        { href: "belt", name: "belt" },
        { href: "socks", name: "socks" },
        { href: "shoes", name: "shoes" },
        { href: "sneakers", name: "sneakers" },
        { href: "loafers", name: "loafers" },
        { href: "boots", name: "boots" },
      ],
      menuName: "men's fashion",
    },
  ],
];

// ! home page > sales > swiper
export const homeSalesSwiper: IProductCard[] = [
  {
    images: ["gamepad-red.png"],
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 88,
    discount: 40,
  },
  {
    images: ["keyboard.png"],
    name: "AK-900 Wired Keyboard",
    price: 1160,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 75,
    discount: 35,
  },
  {
    images: ["monitor.png"],
    name: "IPS LCD Gaming Monitor",
    price: 400,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 99,
    discount: 30,
  },
  {
    images: ["chair.png"],
    name: "S-Series Comfort Chair ",
    price: 400,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 38,
    discount: 25,
  },
  {
    images: ["keyboard.png"],
    name: "AK-900 Wired Keyboard",
    price: 1160,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 75,
    discount: 35,
  },
  {
    images: ["monitor.png"],
    name: "IPS LCD Gaming Monitor",
    price: 400,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 99,
    discount: 30,
  },
  {
    images: ["chair.png"],
    name: "S-Series Comfort Chair ",
    price: 400,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 38,
    discount: 25,
  },
  {
    images: ["gamepad-red.png"],
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 88,
    discount: 40,
  },
];

// ! home page > categories > swiper
export const homeCategoriesSwiper: ICategoryCard[] = [
  {
    title: "phones",
    Icon: PhoneIcon(),
  },
  {
    title: "computers",
    Icon: ComputerIcon(),
  },
  {
    title: "smart watch",
    Icon: WatchIcon(),
  },
  {
    title: "camera",
    Icon: CameraIcon(),
  },
  {
    title: "head phones",
    Icon: HeadPhonesIcon(),
  },
  {
    title: "gaming",
    Icon: GamingIcon(),
  },
  {
    title: "computers",
    Icon: ComputerIcon(),
  },
  {
    title: "smart watch",
    Icon: WatchIcon(),
  },
  {
    title: "head phones",
    Icon: HeadPhonesIcon(),
  },
];

// ! home page > best selling > swiper
export const homeBestSellingSwiper: IProductCard[] = [
  {
    images: ["coat.png"],
    name: "the north coat",
    price: 360,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 65,
    discount: 27,
  },
  {
    images: ["bag.png"],
    name: "gucci duffle bag",
    price: 1160,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 21,
    discount: 17,
  },
  {
    images: ["cpu-cooler.png"],
    name: "RGB liquid CPU Cooler",
    price: 170,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 35,
    discount: 5,
  },
  {
    images: ["book-self.png"],
    name: "Small BookSelf",
    price: 360,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 15,
  },
  {
    images: ["coat.png"],
    name: "the north coat",
    price: 360,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 65,
    discount: 27,
  },
  {
    images: ["bag.png"],
    name: "gucci duffle bag",
    price: 1160,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 21,
    discount: 17,
  },
  {
    images: ["book-self.png"],
    name: "Small BookSelf",
    price: 360,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 15,
  },
];
