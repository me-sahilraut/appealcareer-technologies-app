
import { createSlice } from "@reduxjs/toolkit";

const HamburgerMenu = createSlice({
    name: "Menu",
    initialState: {
        items: [],
    },
    reducers: {

        toggleMenu: (state) => {
            state.IsMenuOpen = !state.IsMenuOpen;
        },
        closeMenu: (state) => {
            state.IsMenuOpen = false;
        },
    },
});

export const { toggleMenu, closeMenu } =
    HamburgerMenu.actions;
export default HamburgerMenu.reducer;


