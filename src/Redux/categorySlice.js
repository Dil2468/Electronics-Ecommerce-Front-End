import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import statusCode from "../util/statusCode";

const params = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
  },
};

const initialState = {
  data: [],
  status: statusCode,
};
export const categoryslice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  },
});

//export const {} = categoryslice.actions;
export default categoryslice.reducer;

export const getCategory = createAsyncThunk("getCat", async (path) => {
  const url = process.env.REACT_APP_GET_API + path;
  const catdata = await fetch(url, params);

  const result = await catdata.json();
  return result.data;
});
