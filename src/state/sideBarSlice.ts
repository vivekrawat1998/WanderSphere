import { createSlice } from "@reduxjs/toolkit";

interface sideBarState {
  open: boolean;
}

const initialState: sideBarState = {
  open: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const sideBarReducer = sideBarSlice.reducer;
export const { toggleSideBar } = sideBarSlice.actions;
