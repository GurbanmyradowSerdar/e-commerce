import { ICartProductCard, IProductCard, TLanguages } from "../types";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function calculateTimeLeft(targetDate: Date): TimeLeft {
  const currentDate = new Date();
  const timeLeft = targetDate.getTime() - currentDate.getTime();

  // ! Converting milliseconds to days, hours, minutes, and seconds
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const validatingZero = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  };

  // ! Returning the time left as an object
  return {
    days: validatingZero(daysLeft),
    hours: validatingZero(hoursLeft),
    minutes: validatingZero(minutesLeft),
    seconds: validatingZero(secondsLeft),
  };
}

// ! amount handlers
export function increaseAmount(amount: number): number {
  return amount >= 20 ? amount : amount + 1;
}
export function decreaseAmount(amount: number): number {
  return amount - 1;
}

// ! remove item from cart
type TRemoveItemFromCart = {
  cartProducts: ICartProductCard[];
  itemIndex: number;
};

export function removeItemFromCartViaIndex({
  cartProducts,
  itemIndex,
}: TRemoveItemFromCart): ICartProductCard[] {
  return [
    ...cartProducts.slice(0, itemIndex),
    ...cartProducts.slice(itemIndex + 1),
  ];
}

// ! add new item to cart
type TAddNewItemToCart = {
  cartProducts: ICartProductCard[];
  props: IProductCard;
  amount: number;
  isFavorite?: boolean;
};

export function addNewItemToCart(args: TAddNewItemToCart): ICartProductCard[] {
  const { amount, cartProducts, isFavorite, props } = args;
  return [...cartProducts, { ...props, amount, isFavorite }];
}

// ! edit exist item in cart
interface IEditExistItemInCart extends TAddNewItemToCart {
  itemIndex: number;
}

export function editExistItemInCart(
  args: IEditExistItemInCart
): ICartProductCard[] {
  const { amount, cartProducts, isFavorite, itemIndex, props } = args;
  return [
    ...cartProducts.slice(0, itemIndex),
    { ...props, amount, isFavorite },
    ...cartProducts.slice(itemIndex + 1),
  ];
}

// ! calculating carts delivery price
export function calculateDeliveryPrice(
  cartArray: ICartProductCard[],
  state: number
): number {
  if (cartArray.length > 0) {
    let sum = 0;
    sum = cartArray.reduce((prev, item) => {
      if (item.discount) {
        return prev + item.amount * (item.price * (item.discount / 100));
      } else {
        return prev + item.amount * item.price;
      }
    }, 0);

    return sum >= 500 ? 0 : 100;
  } else {
    return state;
  }
}

// ! calculating carts subtotal
export function calculateSubtotal(
  cartArray: ICartProductCard[],
  state: number
) {
  if (cartArray.length > 0) {
    return cartArray.reduce((prev, item) => {
      if (item.discount) {
        return prev + item.amount * (item.price * (item.discount / 100));
      } else {
        return prev + item.amount * item.price;
      }
    }, 0);
  } else {
    return state;
  }
}

// ! get locale lang in server components via headers.get()
export function getLocaleInServer(headers: any) {
  return headers().get("locale") as TLanguages;
}
