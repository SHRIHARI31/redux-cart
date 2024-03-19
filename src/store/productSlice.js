import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fullFilled"
      });
  },
});
export const getProduct = createAsyncThunk("product/get", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;
