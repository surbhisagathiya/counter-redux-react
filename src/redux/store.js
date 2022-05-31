import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./feactures/couterSlice";

export default configureStore({
  reducer: {
    counter: couterReducer,
  },
});
