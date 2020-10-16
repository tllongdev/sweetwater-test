import Vue from 'vue';
import Vuex from 'vuex';
import items from '../../public/items.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		inventory: [],
		cartItems: [],
	},
	mutations: {
		SET_INVENTORY: (state, payload) => {
			state.inventory = payload;
		},
		SET_CART_ITEMS: (state, payload) => {
			state.cartItems = payload;
		},
		ADD_TO_CART: (state, payload) => {
			console.log('PAYLOAD=>', payload);
			let product = state.inventory.find(i => i.itemid === payload.itemid);
			let cartProduct = state.cartItems.find(i => i.itemid === payload.itemid);
			console.log('PRODUCT=>', product);
			console.log('CARTPRODUCT=>', cartProduct);

			if (cartProduct) {
				cartProduct.quantity++;
			} else {
				state.cartItems.push({
					...product,
					quantity: 1,
				});
			}
		},
		REMOVE_FROM_CART: (state, payload) => {
			let cartProductIndex = state.cartItems.findIndex(i => i.itemid === payload.itemid);

			state.cartItems.splice(cartProductIndex, 1);
		},
		UPDATE_QTY: (state, {item, value}) => {
			let cartProduct = state.cartItems.find(i => i.itemid === item.itemid);

			if (cartProduct) {
				cartProduct.quantity = value;
			}
		},
	},
	actions: {
		setInventory: ({ commit }) => {
			commit(
				'SET_INVENTORY',
				items.forEach(e => delete e.quantity)
			);
		},
		setCartItems: ({ commit }) => {
			commit('SET_CART_ITEMS', items);
		},
		addToCart: ({ commit }, payload) => {
			commit('ADD_TO_CART', payload);
		},
		removeFromCart: ({ commit }, payload) => {
			commit('REMOVE_FROM_CART', payload);
		},
		updateQty: ({ commit }, payload) => {
			commit('UPDATE_QTY', payload);
		},
	},
});
// (() => store.commit('SET_CART_ITEMS', items))();
(() => store.commit('SET_INVENTORY', items))();
(() => store.state.inventory.forEach(e => delete e.quantity))();
// console.log(store.state);
