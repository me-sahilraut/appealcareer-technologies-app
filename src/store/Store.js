import { configureStore } from "@reduxjs/toolkit";
import HamburgerMenu from "./HamburgerMenu";

const Store = configureStore({
    reducer: {
        Menu: HamburgerMenu,
    },
});

export default Store;
