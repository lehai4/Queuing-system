import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {};

const initialState: initialStateType = {};
export const dataTicketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = dataTicketSlice.actions;

export default dataTicketSlice.reducer;
