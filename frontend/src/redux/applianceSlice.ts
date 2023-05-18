import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApplianceProp } from "../typeProps";
import { toast } from "react-toastify";

import { child, get, getDatabase, ref, set } from "firebase/database";
import app from "../database/firebaseConfig";

const dbRef = ref(getDatabase(app));
type applianceProps = {
  applianceArr: ApplianceProp[];
  status: string;
};
let appliance: applianceProps = {
  applianceArr: [],
  status: "idle",
};
//
type initialStateType = {
  appliance: applianceProps;
};
const initialState: initialStateType = {
  appliance,
};
const applianceSlice = createSlice({
  name: "appliance",
  initialState,
  reducers: {
    addAppliance: (state, action: PayloadAction<ApplianceProp>) => {
      state.appliance.applianceArr.push(action.payload);
      return {
        ...state,
        appliance: {
          ...state.appliance,
          grantArr: [...state.appliance.applianceArr, action.payload],
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppliance.pending, (state) => {
        state.appliance.status = "loading";
      })
      .addCase(fetchAppliance.fulfilled, (state, action) => {
        state.appliance.applianceArr = action.payload;
        state.appliance.status = "idle";
      });
  },
});

export const fetchAppliance = createAsyncThunk(
  "appliances/fetchAppliance",
  async () => {
    try {
      let req = await get(child(dbRef, `appliance/`));
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

export const addNewAppliance = createAsyncThunk(
  "appliances/addNewAppliance",
  async (id, newAppliance) => {
    try {
      await set(child(dbRef, `appliance/` + id), newAppliance)
        .then(() => {
          toast.success(`Data saved successfully`);
        })
        .catch((error) => {
          toast.error("The write failed", error);
        });
    } catch (err) {
      console.log(err);
    }
  }
);
export const { addAppliance } = applianceSlice.actions;
export default applianceSlice.reducer;
