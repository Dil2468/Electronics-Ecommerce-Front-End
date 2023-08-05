import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import statusCode from "../util/statusCode";

const params = {
  method: "GET",
  headers: {
    // "Content-Type": "application/json",
    // Accept: "application/json",
    Authorization: "bearer" + process.env.REACT_APP_STRIPE_KEY,
  },
};

export const getProduct = createAsyncThunk("getprod", async (path) => {
  const url = process.env.REACT_APP_GET_API + path;
  const proddata = await fetch(url, params);
  const result = await proddata.json();
  return result.data;
});

export const productslice = createSlice({
  name: "product",
  initialState: {
    proddata: [],

    status: statusCode,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getProduct.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.proddata = action.payload;

        state.status = statusCode.IDLE;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  },
});

export const {} = productslice.actions;
export default productslice.reducer;
