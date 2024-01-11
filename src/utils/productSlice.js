import { createSlice } from "@reduxjs/toolkit";
import rows from '../data/ProductItemRows.json'


const updateLocalStorage = (items) => {
    const updatedData = JSON.stringify(items);
    localStorage.setItem('productData', updatedData);
    return items;
}

// Retrieve data from local storage
const storedData = localStorage.getItem('productData');
const initialData = storedData ? JSON.parse(storedData) : [];

const dataToUse = initialData.length > 0 ? initialData : updateLocalStorage(rows);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: dataToUse
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload)
            updateLocalStorage(state.items)
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((item) => item.ID !== action.payload)
            updateLocalStorage(state.items)
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
            updateLocalStorage(state.items)
        }
    }
})

export const {addProduct, removeProduct, editProduct} = productSlice.actions;

export default productSlice.reducer;