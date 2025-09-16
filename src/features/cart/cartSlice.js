import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { getSessionId } from '../../utils/session';



const initialState = {
  items: [],
  loading: false,
  error: null,
  checkoutSummary: null,
};


export const addToCart = createAsyncThunk(
    'cart/addToCart',
    
    async ({product_id, quantity, customizations}, {rejectWithValue}) => {
        const session_id = getSessionId();
        try {
            const resp = await axios.post('http://127.0.0.1:8000/api/cart/add/', {
                product_id: product_id,
                quantity,
                customizations,
                session_id,
            });
            return resp.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (_, thunkAPI) => {
        try {
            const session_id = getSessionId();
            const resp = await axios.get(` http://127.0.0.1:8000/api/cart/items/?session_id=${session_id}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }

)

// for the checkout page, we fetch the total_price, order, id,
export const fetchCheckoutPage = createAsyncThunk(
  "cart/fetchCheckoutPage",
  async (_, thunkAPI) => {
    try {
      const session_id = getSessionId();
      const resp = await axios.get(
        `http://127.0.0.1:8000/api/checkout/summary/?session_id=${session_id}`
      );
      return resp.data; // { order_id, total_price }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching checkout");
    }
  }
);




export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async (cartItemId, thunkAPI)=>{
        try {
            await axios.delete(`http://127.0.0.1:8000/api/cart/items/delete/${cartItemId}/`);
            return cartItemId;  //we will return this so we can remove it in redux state
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
    
);

export const checkoutCart = createAsyncThunk(
    'cart/checkout',
    async(_, {rejectWithValue}) => {
        const session_id = getSessionId();

        try {
            const resp = await axios.post('http://127.0.0.1:8000/api/cart/checkout/', {
                session_id,
            });
            return resp.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'checkout failed')
        }
    }

);


const cartSlice = createSlice({
    name: 'cart.items',
    initialState,

    reducers: {
        // optional, to reset the cart
        resetCart: (state)=>{
            state.items = [];
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },


    },

    extraReducers: (builder)=> {
        builder
          .addCase(addToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })

          .addCase(addToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something Went Wrong";
          })

          // fetchCart
          .addCase(fetchCartItems.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCartItems.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchCartItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "failed to fetchCartItems";
          })

          //checkout cart
          .addCase(checkoutCart.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(checkoutCart.fulfilled, (state) => {
            state.loading = false;
            state.items = [];
          })
          .addCase(checkoutCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "checkout failed";
          })

          // checkoutSummary where we fetch or order_id, total_price in the Checkout.jsx

          .addCase(fetchCheckoutPage.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCheckoutPage.fulfilled, (state, action) => {
            state.loading = false;
            state.checkoutSummary = action.payload; // save response
          })
          .addCase(fetchCheckoutPage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });












        // for deleteCart

        // .addCase(deleteCartItem.fulfilled, (state, action)=>{
        //     state.items = state.items.filter(item => item.id !== action.payload);

        // })
        // .addCase(deleteCartItem.rejected, (state, action)=> {
        //     state.error = action.payload || 'failed to delete item from cart';
        // })
    }
})

export const {resetCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
