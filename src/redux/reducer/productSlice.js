
import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cardData: [],
    cardDetail: {},
    isLoading: false,
    error: null,
}

export const getProducts = createAsyncThunk('product/fetchAll', async (getQuery, thunkApi) => {
    try {
        const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products?q=${getQuery}`);
        return response.data;
    } catch (e) {
        thunkApi.rejectWithValue(e.message);
    }
})

export const getSingleProducts = createAsyncThunk('product/fetchSingle', async (param, thunkApi) => {
    try {
        const response = await axios.get(`https://my-json-server.typicode.com/kimbboyong/crn-study/products/${param.id}`);
        return response.data;
    } catch (e) {
        thunkApi.rejectWithValue(e.message);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cardData = action.payload;
        }).addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })

        builder.addCase(getSingleProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getSingleProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cardDetail = action.payload;
        }).addCase(getSingleProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })

    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;