import Vue from 'vue';
import Vuex from 'vuex';
import items from '../../public/items.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cartItems: [],
	},
	mutations: {
		SET_CART_ITEMS: (state, cartItems) => {
			state.cartItems = cartItems;
		},
	},
	// actions: {
	// 	setCartItems: ({ commit }) => {
	// 		items.getItems().then(items => {
	// 			commit('SetCartItems', items);
	// 		});
	// 	},
	// },
});

(() => store.commit('SET_CART_ITEMS', items))();
