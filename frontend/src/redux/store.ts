import { configureStore } from "@reduxjs/toolkit";
import dataTicketReducer from "./dataTicketSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    ticket: dataTicketReducer,
    auth: authReducer,
    users: userReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
