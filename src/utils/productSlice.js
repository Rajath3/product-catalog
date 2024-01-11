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
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((item) => item.ID !== action.payload)
        },
        editProduct: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.ID === action.payload.id) {
                    return {
                        ...item,
                        [action.payload.column]: action.payload.value
                    }
                }
                return item;
            })
        }
    }
})

export const {addProduct, removeProduct, editProduct} = productSlice.actions;

export default productSlice.reducer;