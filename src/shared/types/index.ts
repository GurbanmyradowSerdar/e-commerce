import { DetailedHTMLProps, InputHTMLAttributes } from "react";

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

// ! primary button
export interface IPrimaryButton extends IChildren, IClassName {}

// ! custom link
export interface ICustomLink extends IChildren, IClassName {
  href: string;
}

// ! banner button
export interface IBannerButton {
  text: string;
}

// ! service card
export interface IServiceCard {
  image: string;
  title: string;
  subtitle: string;
}

// ! navigation train
export interface INavigationTrain {
  isNotFound?: boolean;
}

// ! input without label
export interface IInputWithoutLabel {
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

// ! about card
export interface IAboutCard {
  Icon: React.ReactNode;
  title: string;
  subtitle: string;
}

// ! about swiper card
interface IAboutEmplayeeCardHref {
  twitter: string;
  instagram: string;
  linkedin: string;
}
export interface IAboutEmployeeCard {
  image: string;
  name: string;
  status: string;
  href: IAboutEmplayeeCardHref;
}
