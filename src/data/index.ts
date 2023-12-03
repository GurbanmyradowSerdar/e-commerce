import {
  ICategoryCard,
  IHomeSideBarMenuLink,
  INameAndHref,
  IProductCard,
} from "types";

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
    icon: "PhoneIcon",
  },
  {
    title: "computers",
    icon: "ComputerIcon",
  },
  {
    title: "smartWatch",
    icon: "WatchIcon",
  },
  {
    title: "camera",
    icon: "CameraIcon",
  },
  {
    title: "headPhones",
    icon: "HeadPhonesIcon",
  },
  {
    title: "gaming",
    icon: "GamingIcon",
  },
  {
    title: "computers",
    icon: "ComputerIcon",
  },
  {
    title: "smartWatch",
    icon: "WatchIcon",
  },
  {
    title: "headPhones",
    icon: "HeadPhonesIcon",
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

// ! home page > products > swiper
export const homeProductsSwiper: IProductCard[] = [
  {
    images: ["dog-food.png"],
    name: "Breed Dry Dog Food",
    price: 100,
    rating: [1, 1, 1, 0, 0],
    ratingAmount: 35,
  },
  {
    images: ["camera.png"],
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 95,
  },
  {
    images: ["laptop.png"],
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 325,
  },
  {
    images: ["cream.png"],
    name: "Curology Product Set ",
    price: 500,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 145,
  },
  {
    images: ["kids-car.png"],
    name: "kids eletric car",
    price: 960,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 65,
    colors: ["red", "pink"],
    isNew: true,
  },
  {
    images: ["soccers.png"],
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 35,
    colors: ["yellow", "green"],
  },
  {
    images: ["black-gamepad.png"],
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 55,
    colors: ["black", "purple"],
  },
  {
    images: ["jacket.png"],
    name: "Quilted Satin Jacket",
    price: 160,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 55,
    colors: ["darkblue", "red"],
  },
  {
    images: ["cream.png"],
    name: "Curology Product Set ",
    price: 500,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 145,
  },
  {
    images: ["kids-car.png"],
    name: "kids eletric car",
    price: 960,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 65,
    colors: ["red", "pink"],
    isNew: true,
  },
  {
    images: ["dog-food.png"],
    name: "Breed Dry Dog Food",
    price: 100,
    rating: [1, 1, 1, 0, 0],
    ratingAmount: 35,
  },
  {
    images: ["camera.png"],
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 95,
  },
  {
    images: ["laptop.png"],
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 325,
    isNew: true,
  },
];

// ! related products in wishlist && product[id] page
export const relatedProducts: IProductCard[] = [
  {
    images: ["gamepad-red.png"],
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 88,
    discount: 40,
  },
  {
    images: ["camera.png"],
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 95,
  },
  {
    images: ["jacket.png"],
    name: "Quilted Satin Jacket",
    price: 160,
    rating: [1, 1, 1, 1, 0.5],
    ratingAmount: 55,
    colors: ["darkblue", "red"],
  },
  {
    images: ["cream.png"],
    name: "Curology Product Set ",
    price: 500,
    rating: [1, 1, 1, 1, 0],
    ratingAmount: 145,
  },
  {
    images: ["kids-car.png"],
    name: "kids eletric car",
    price: 960,
    rating: [1, 1, 1, 1, 1],
    ratingAmount: 65,
    colors: ["red", "pink"],
    isNew: true,
  },
];
