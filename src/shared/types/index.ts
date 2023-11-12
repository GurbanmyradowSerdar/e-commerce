// ! children
export interface IChildren {
  children: React.ReactNode;
}

// ! className
export interface IClassName {
  className?: string;
}

// ! languages type
export type TLanguages = "tm" | "en" | "ru";

// ! header nav link
export interface IHeaderLink {
  text: string;
  href: string;
}

// ! footer nav link
export interface IFooterLink {
  text: string;
  href: string;
  isIndependent?: boolean;
}

// ! product card
export interface IProductCard {
  discount?: number;
  images: string[];
  name: string;
  price: number;
  rating: number[];
  ratingAmount: number;
  isFavorite?: boolean;
  isNew?: boolean;
  colors?: string[];
}

// ! category card
export interface ICategoryCard {
  title: string;
  Icon: React.ReactNode;
}
