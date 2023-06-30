import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCount: (state, action) => {
            const idx = state.findIndex((element) => {
                return element.id === action.payload;
            });
            state[idx].count += 1;
        },
        removeCount: (state, action) => {
            const idx = state.findIndex((element) => {
                return element.id === action.payload;
            });
            state[idx].count -= 1;
        },
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            const idx = state.findIndex((element) => {
                return element.id === action.payload;
            });
            state.splice(idx, 1);
        },
    },
});

export let { addCount, removeCount, addItem, removeItem } = cart.actions;

export default cart;
