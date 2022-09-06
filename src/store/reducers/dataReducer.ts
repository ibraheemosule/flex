import { IState } from "../../ts-types";
import { createSlice } from "@reduxjs/toolkit";
import events from "../../../events";

const initialState: IState = {
  events: [...events],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
