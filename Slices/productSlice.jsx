import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data; // response.json()
})

export const postProducts = createAsyncThunk('products/create', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})

export const productSlice = createSlice({

    name : 'products',
    initialState : {
        products : [],
        loading : false,
        error : null
    },
    reducers : {},

    extraReducers : (builder) => {
       builder.addCase(fetchProducts.fulfilled, (state,action) => {
        state.loading = false
        state.products = action.payload
       })

       builder.addCase(fetchProducts.pending, (state,action) => {
        state.loading = true
       })

       builder.addCase(fetchProducts.rejected, (state,action) => {
        state.error = 'failed to get the data '
        state.loading = false
       })
    }

})

export default productSlice.reducer