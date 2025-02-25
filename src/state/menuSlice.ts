import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  open: boolean;
}

const initialState: menuState = { open: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu } = menuSlice.actions;
