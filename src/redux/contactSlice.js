import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactSlice = createSlice({
    name: 'contact',
    initialState: { items: [], filter: ''},
    reducers: {
        addContact(state, { payload }) {
            state.items.push(payload);
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
}

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;