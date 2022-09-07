import { IState, Object } from "../../ts-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import events from "../../../events";

const initialState: IState = {
  events: [...events],
  slicedEvents: [],
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

    slicedArray(state, action: PayloadAction<number>) {
      const slice = state.events.slice(action.payload, action.payload + 6);
      state.slicedEvents = [...state.slicedEvents, ...slice];
    },
  },
});

export const { sortEvents, slicedArray } = dataSlice.actions;

export default dataSlice.reducer;
