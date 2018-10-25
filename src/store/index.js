import Vue from 'vue'
import Vuex from 'vuex'

import customers from '@/data/customers.json'
import sponsors from '@/data/sponsors.json'

Vue.use(Vuex)
//
const store = new Vuex.Store({
	state: {
		showOverlayMenu: false,
		customers: {},
		sponsors: {}
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
		},

		toggleHoverCustomer(state, customer) {
			state.customers = state.customers.map((item) => {
				if (item == customer) {
					item.hover = ! item.hover
				} else {
					item.hover = false
				}
				return item
			})
		}
	},

	actions: {
		toggleOverlayMenu(context) {
			context.commit('toggleOverlayMenu')
		},

		toggleHoverCustomer(context, customer) {
			context.commit('toggleHoverCustomer', customer)
		},

		init(context) {
			context.commit('addSponsors', sponsors)
			context.commit('addCustomers', customers)
		}
	}
})

export default store