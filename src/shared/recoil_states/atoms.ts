import { atom } from "recoil";
import {
  ICartProductCard,
  ICheckoutCard,
  ICredentials,
  IProductCard,
} from "../types";
import { calculateDeliveryPrice, calculateSubtotal } from "../utils";

// ! favorites
export const favoriteProductsState = atom<IProductCard[]>({
  key: "FavoriteProducts",
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("favorite-products", JSON.stringify(param));
      });
      setSelf(() => {
        let returnValue: IProductCard[];

        if (typeof window !== "undefined" && localStorage) {
          returnValue =
            localStorage.getItem("favorite-products") !== null
              ? JSON.parse(localStorage.getItem("favorite-products") as string)
              : [];
        } else {
          returnValue = [];
        }
        return returnValue;
      });
    },
  ],
});

// ! cart
export const cartProductsState = atom<ICartProductCard[]>({
  key: "CartProducts",
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("cart-products", JSON.stringify(param));
      });
      setSelf(() => {
        let returnValue: ICartProductCard[];

        if (typeof window !== "undefined" && localStorage) {
          returnValue =
            localStorage.getItem("cart-products") !== null
              ? JSON.parse(localStorage.getItem("cart-products") as string)
              : [];
        } else {
          returnValue = [];
        }
        return returnValue;
      });
    },
  ],
});

// ! subtotal price
export const subTotalPriceState = atom<number>({
  key: "SubTotalPrice",
  default: 0,
  effects: [
    ({ setSelf }) => {
      setSelf((state) => {
        let cartArray: ICartProductCard[] = [];

        if (typeof window !== "undefined" && localStorage) {
          cartArray =
            localStorage.getItem("cart-products") &&
            JSON.parse(localStorage.getItem("cart-products") as string);
        }

        return calculateSubtotal(cartArray, state as number);
      });
    },
  ],
});

// ! delivery price
export const deliveryPriceState = atom<number>({
  key: "DeliveryPrice",
  default: 100,
  effects: [
    ({ setSelf }) => {
      setSelf((state) => {
        let cartArray: ICartProductCard[] = [];

        if (typeof window !== "undefined" && localStorage) {
          cartArray =
            localStorage.getItem("cart-products") &&
            JSON.parse(localStorage.getItem("cart-products") as string);
        }

        return calculateDeliveryPrice(cartArray, state as number);
      });
    },
  ],
});

// ! checkout products to sell
export const checkoutProductsState = atom<ICheckoutCard[]>({
  key: "CheckoutProducts",
  default: [],
  effects: [
    ({ setSelf }) => {
      setSelf(() => []);
    },
  ],
});

// ! credentials of user
const defaultCredentials: ICredentials = {
  phoneNumber: "",
  email: "",
  firstName: "",
  companyName: "",
  apartment: "",
  city: "",
  streetAddress: "",
  password: "",
};
export const credentialsState = atom<ICredentials>({
  key: "Credentials",
  default: { ...defaultCredentials },
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("credentials", JSON.stringify(param));
      });
      setSelf(() => {
        let returnValue: ICredentials;

        if (typeof window !== "undefined" && localStorage) {
          returnValue =
            localStorage.getItem("credentials") !== null
              ? JSON.parse(localStorage.getItem("credentials") as string)
              : defaultCredentials;
        } else {
          returnValue = defaultCredentials;
        }
        return returnValue;
      });
    },
  ],
});
