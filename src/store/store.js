import { configureStore } from "@reduxjs/toolkit";
import { mailSliceReducer } from "./slices/mailSlice";

export const store = configureStore({
  reducer: {
    mails: { mailSliceReducer },
  },
});
