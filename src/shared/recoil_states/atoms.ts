import { atom } from "recoil";
import { IProductCard } from "../types";

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
