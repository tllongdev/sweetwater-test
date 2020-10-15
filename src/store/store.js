import Vue from 'vue';
import Vuex from 'vuex';
import items from '../../public/items.json'

Vue.use(Vuex);

export const store = new Vuex.store({
	state: {
		cartItems: [],
	},
	actions: {
		setCartItems: ({ commit }) => {
			items.getItems().then(items => {
				commit('SetCartItems', items);
			});
		},
	},
});
