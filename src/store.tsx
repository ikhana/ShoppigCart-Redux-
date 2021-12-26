import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cart from "./cart/Cart.slice";
import courses from './products/Product.slice'

export const store = configureStore(
    {reducer:{
        courses,
        cart
    }
    }
);
export type TStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();