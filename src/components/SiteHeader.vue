<template>
	<header ref="header" class="header" :class="{fixed}">
		<OverlayMenu v-if="showOverlayMenu"></OverlayMenu>
	    <div class="container-fluid">
	        <div class="row align-items-center">
	            <div class="col p-3 pl-4">
	                <router-link to="/">
	                	<img src="../assets/tuil-logo.svg" style="width: 40px;">
	                </router-link>
	            </div>
	            <div class="col text-right text-white pr-4">

					<i class="fas fa-bars" @click="toggleOverlayMenu()" style="cursor: pointer;"></i>

	                <div class="menu">
	                	<span class="border-transparent">Bli arenaløfter!</span>
	                	<router-link to="/privat" class="text-white border border-white rounded p-2 ml-3">Privatperson</router-link>
	                	<!-- <a href="https://butikk.tuil.no/categories/arena-ii" target="_blank" class="text-white border border-white rounded p-2 ml-3">Privatperson</a> -->
	                	<a href="#" class="text-white border border-white rounded p-2 ml-3">Bedrift</a>
	                </div>
	            </div>
	        </div>
	    </div>
	</header>
</template>
<script>
import OverlayMenu from './OverlayMenu'
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			fixed: false
		}
	},
	components: {
		OverlayMenu
	},

	computed: {
		...mapState(['showOverlayMenu'])
	},

	methods: {
		...mapActions(['toggleOverlayMenu']),

		handleScroll() {
			this.fixed = window.scrollY > 75 ? true : false
		}
	},

	mounted() {
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll()
	}
};
</script>
<style lang="scss" scoped>
$blue: rgb(35,46,86);
$yellow: rgb(255,166,17);
$white_bg: #f7f7f7;

$font-family: 'Roboto', sans-serif;
header {
    background-color: #222a46;

    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #222a46;

    &.fixed {
    	position: fixed;
    	z-index: 1000;
    	top: 0;
    	height: 75px;

    	background-color: rgba(34, 42, 70, .9);
    }

    .menu {
    	display: none;
    }
}

@media all and (min-width:576px) {
    

}

@media all and (min-width:768px) {
    
}

@media all and (min-width:992px) {
    .fa-bars {
    	display: none;
    }

	.menu {
    	display: block !important;
    }
}

@media all and (min-width:1200px) {
    
}
</style>