import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PropsHistory } from "../typeProps";

type initialStateType = {
  historySession: PropsHistory[];
};
const historySession: PropsHistory[] = [];
const initialState: initialStateType = {
  historySession,
};
const historySlice = createSlice({
  name: "historySession",
  initialState: initialState,
  reducers: {
    getHistorySession: (state) => {
      return state;
    },
    addHistorySession: (state, action: PayloadAction<PropsHistory>) => {
      return {
        ...state,
        historySession: [...state.historySession, action.payload],
      };
    },
  },
});
export const { getHistorySession, addHistorySession } = historySlice.actions;
export default historySlice.reducer;
