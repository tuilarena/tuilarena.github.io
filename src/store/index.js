import Vue from 'vue'
import Vuex from 'vuex'

import customers from '@/data/customers.json'
import sponsors from '@/data/sponsors.json'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		showOverlayMenu: false
	},

	mutations: {
		toggleOverlayMenu(state) {
			state.showOverlayMenu = ! state.showOverlayMenu
		},

		addSponsors(state, sponsors) {
			state.sponsors = sponsors
		},

		addCustomers(state, customers) {
			state.customers = customers
		}
	},

	actions: {
		toggleOverlayMenu(context) {
			context.commit('toggleOverlayMenu')
		},

		init(context) {
			context.commit('addSponsors', sponsors)
			context.commit('addCustomers', customers)
		}
	}
})

export default store