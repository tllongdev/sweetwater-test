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

			// let item = payload;
			// item = { ...item, quantity: 1 };
			// if (state.cartItems.length > 0) {
			// 	let bool = state.cartItems.some(i => i.itemId === item.itemId);
			// 	if (bool) {
			// 		let itemIndex = state.cartItems.findIndex(el => el.itemId === item.itemId);
			// 		state.cartItems[itemIndex]['quantity'] += 1;
			// 	} else {
			// 		state.cartItems.push(item);
			// 	}
			// } else {
			// 	state.cartItems.push(item);
			// }

			// const item = state.cartItems.some(i => i.itemId === payload.itemId);
			// console.log(item);
			// item
			// 	? (state.cartItems[state.cartItems.findIndex(e => e.itemId === payload.itemId)]['quantity'] += 1)
			// 	: state.cartItems.push(payload);
		},
		REMOVE_FROM_CART: (state, payload) => {
			state.cartItems.filter(i => i.itemId !== payload.itemId);
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
	},
});
// (() => store.commit('SET_CART_ITEMS', items))();
(() => store.commit('SET_INVENTORY', items))();
(() => store.state.inventory.forEach(e => delete e.quantity))();
// console.log(store.state);
