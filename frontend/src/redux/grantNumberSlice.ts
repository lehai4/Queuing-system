import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GrantNumberInterface } from "../typeProps";

import { child, get, getDatabase, ref, set } from "firebase/database";
import app from "../database/firebaseConfig";

const dbRef = ref(getDatabase(app));
type grantProps = {
  grantArr: GrantNumberInterface[];
  status: string;
};
let grantNumber: grantProps = {
  grantArr: [],
  status: "idle",
};
type initialStateType = {
  grantNumber: grantProps;
};
const initialState: initialStateType = {
  grantNumber,
};
const grantNumberSlice = createSlice({
  name: "grantNumber",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrantNumber.pending, (state) => {
        state.grantNumber.status = "loading";
      })
      .addCase(fetchGrantNumber.fulfilled, (state, action) => {
        state.grantNumber.grantArr = action.payload;
        state.grantNumber.status = "idle";
      });
  },
});

export const fetchGrantNumber = createAsyncThunk(
  "grantNumber/fetchGrantNumber",
  async () => {
    try {
      let req = await get(child(dbRef, `grantNumber/`));
      if (req.exists()) {
        let data = [req.val()];
        let [a, ...result] = data[0];
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const {} = grantNumberSlice.actions;
export default grantNumberSlice.reducer;
