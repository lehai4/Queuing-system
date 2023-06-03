import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { child, get, getDatabase, ref } from "firebase/database";
import app from "../database/firebaseConfig";
import { GrantNumberInterface } from "../typeProps";

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
  reducers: {
    addGrantNumber: (state, action: PayloadAction<GrantNumberInterface>) => {
      return {
        ...state,
        grantNumber: {
          ...state.grantNumber,
          grantArr: [...state.grantNumber.grantArr, action.payload],
        },
      };
    },
  },
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

export function addGrantNumberNew(data: GrantNumberInterface) {
  return function addGrantNumberNewThunk(dispath: any, getState: any) {
    // custom

    dispath(addGrantNumber(data));
  };
}

export const { addGrantNumber } = grantNumberSlice.actions;
export default grantNumberSlice.reducer;
