import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    type: "",
    assigned: "",
    status: "",
  },
};

export const fliterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.value.type = action.payload.data;
    },
    changeAssigned: (state, action) => {
      state.value.assigned = action.payload.data;
    },
    changeStatus: (state, action) => {
      state.value.status = action.payload.data;
    },
  },
});

export const { changeType, changeAssigned, changeStatus } = fliterSlice.actions;

export default fliterSlice.reducer;
