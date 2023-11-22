import { atom } from "recoil";
import { ICartProductCard, IProductCard } from "../types";

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
