import { atom } from "recoil";

type TFavoriteProduct = {
  name: string;
};

export const favoriteProductsState = atom<TFavoriteProduct[]>({
  key: "favoriteProducts",
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("favorite-products", JSON.stringify(param));
      });
      setSelf(() => {
        let returnValue: TFavoriteProduct[] =
          localStorage.getItem("favorite-products") !== null
            ? JSON.parse(localStorage.getItem("favorite-products") as string)
            : 0;
        return returnValue;
      });
    },
  ],
});
