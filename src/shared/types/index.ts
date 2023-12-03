import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { SwiperProps } from "swiper/react";

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
export type TIconName =
  | "CameraIcon"
  | "ComputerIcon"
  | "GamingIcon"
  | "HeadPhonesIcon"
  | "PhoneIcon"
  | "WatchIcon";

export interface ICategoryCard {
  title: string;
  icon: TIconName;
}

// ! primary button
export interface IPrimaryButton extends IChildren, IClassName {
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
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
  title: string;
  i: number;
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

// ! arrow button
export interface IArrowButton extends IClassName {
  direction: "left" | "right" | "up";
  isScrolling?: boolean;
}

// ! banners content
export interface IBannerContent extends IClassName {
  title: string;
  description: string;
}

// ! main divider
type TDirection = "horizontal" | "vertical";
export interface IMainDivider extends IClassName {
  dir: TDirection;
}

// ! home banner section > sidebar > menu link
export interface IHomeSideBarMenuLink {
  menuName: string;
  menuItems: { href: string; name: string }[];
}

// ! name and href
export interface INameAndHref {
  name: string;
  href: string;
}

// ! product swiper
export interface IProductSwiper {
  swiperProps: SwiperProps;
  data: IProductCard[];
  itemsCentered?: boolean;
}

// ! time type
export type TTime = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

// ! home category swiper home > category section
export interface ICategorySwiper {
  swiperProps: SwiperProps;
  data: ICategoryCard[];
}

// ! home page section title with Quadrant
export interface ISectionTitleWithQuadrant extends IClassName {
  text: string;
  withoutQuadrant?: boolean;
}

// ! just text interface with className?
export interface ITextWithClassName extends IClassName {
  text: string;
}

// ! cartProducts atom interface recoil
export interface ICartProductCard extends IProductCard {
  amount: number;
}

// ! checkout > inputs, input with label component
export interface IInputWithLabel extends IClassName {
  label: string;
  labelSpan?: string;
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: string;
}

// ! checkout > checkout card component
export interface ICheckoutCard {
  image: string;
  name: string;
  price: number;
}

// ! cart > total card section
export type TPrice = {
  subTotal: number;
  deliveryPrice: number;
  total: number;
};

// ! checkout form inputs
export interface ICredentials {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
}

// ! lang props in page
export interface ILangProps {
  params: { lang: TLanguages };
}

// ! lang props to components
export interface ILangPropsToComponent {
  lang: TLanguages;
}
