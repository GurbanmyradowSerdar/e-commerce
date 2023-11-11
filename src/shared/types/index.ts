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
  isIndependent: boolean;
}
