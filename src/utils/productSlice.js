import { createSlice } from "@reduxjs/toolkit";
import rows from '../data/ProductItemRows.json'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: rows
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;