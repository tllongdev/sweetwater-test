import Vue from 'vue';
import Vuex from 'vuex';
import items from '../../public/items.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cartItems: [],
	},
	mutations: {
		SET_CART_ITEMS: (state, payload) => {
			state.cartItems = payload;
		},
		ADD_TO_CART: (state, payload) => {
			const item = state.cartItems.find(i => i.itemId === payload.itemId);
			!item ? state.cartItems.push(payload) : payload.quantity++;
		},
		REMOVE_FROM_CART: (state, payload) => {
			state.cartItems.filter(i => i.itemId !== payload.itemId);
		},
	},
	actions: {
		setCartItems: ({ commit }) => {
			() => commit('SET_CART_ITEMS', items);
		},
		addToCart: ({ commit }, payload) => {
			commit('ADD_TO_CART', payload);
		},
	},
});

// (() => store.commit('SET_CART_ITEMS', items))();
