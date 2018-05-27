import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		showOverlayMenu: false
	},

	mutations: {
		toggleOverlayMenu(state) {
			state.showOverlayMenu = ! state.showOverlayMenu
		}
	},

	actions: {
		toggleOverlayMenu(context) {
			context.commit('toggleOverlayMenu')
		}
	}
})

export default store