import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const getContacts = state => state.contacts.items;
export const getFilterContacts = state => state.contacts.filter;

const initialItems = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { items: initialItems, filter: '' },
	reducers: {
		addContactList: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeContact: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		changeFilter(state, action) {
			state.filter = action.payload;
		},
	},
});

export const { addContactList, removeContact, changeFilter } =
	contactsSlice.actions;

const persistConfig = {
	key: 'contacts',
	storage,
	whitelist: ['items'],
};

export const persistedReducer = persistReducer(
	persistConfig,
	contactsSlice.reducer,
);
