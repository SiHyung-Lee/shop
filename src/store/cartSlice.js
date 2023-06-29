import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {
        addCount: (state, action) => {
            const idx = state.findIndex((element) => {
                return element.id === action.payload;
            });
            state[idx].count += 1;
        },
        addItem: (state, action) => {
            console.log('aaa');
            state.push(action.payload);
            console.log(action.payload);
        },
    },
});

export let { addCount, addItem } = cart.actions;

export default cart;
