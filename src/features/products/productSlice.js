import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productsByCategory: {},
    isLoading:false,
    error:null,
}


export const fetchProducts = createAsyncThunk (
    'products/fetchProducts',
    async (categorySlug='', thunkAPI) => {
        try {
            const resp  = await axios.get (
                categorySlug ? `https://lovegiftings-backend.onrender.com/api/products/?category=${categorySlug}` : 'http://localhost:8000/api/products'
            )
            return { category: categorySlug, data: resp.data };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }

)

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchProducts.pending, (state)=>{
                state.isLoading = true;
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state,action)=>{
                state.isLoading = false;
                const {category, data} = action.payload;
                state.productsByCategory[category] = data;
            })
            .addCase(fetchProducts.rejected, (state,action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})
export default productSlice.reducer;

