import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menuSlice";
import { sideBarReducer } from "./sideBarSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    sideBar: sideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
