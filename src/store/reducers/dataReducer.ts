import { IState, Object } from "../../ts-types";
import { createSlice } from "@reduxjs/toolkit";
import events from "../../../events";

const initialState: IState = {
  events: [...events],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    sortEvents(state) {
      state.events = state.events.sort((a: Object, b: Object) => {
        return new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
          ? 1
          : -1;
      });
    },
  },
});

export const { sortEvents } = dataSlice.actions;

export default dataSlice.reducer;
