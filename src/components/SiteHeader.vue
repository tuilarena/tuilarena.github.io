<template>
	<header class="header">
		<OverlayMenu v-if="showOverlayMenu" @close="showOverlayMenuj = false"></OverlayMenu>
	    <div class="container-fluid">
	        <div class="row align-items-center">
	            <div class="col p-3 pl-4">
	                <img src="../assets/tuil-logo.svg" style="width: 40px;">
	            </div>
	            <div class="col text-right text-white pr-4">

					<i class="fas fa-bars" @click="showOverlayMenu = !showOverlayMenu"></i>

	                <div class="menu">
	                	<span class="border-transparent">Bli arenaløfter!</span>
	                	<a href="https://butikk.tuil.no/categories/arena-ii" target="_blank" class="text-white border border-white rounded p-2 ml-3">Privatperson</a>
	                	<a href="#" class="text-white border border-white rounded p-2 ml-3">Bedrift</a>
	                </div>
	            </div>
	        </div>
	    </div>
	</header>
</template>
<script>
import OverlayMenu from './OverlayMenu'
export default {
	components: {
		OverlayMenu
	},

	data() {
		return {
			showOverlayMenu: true
		}
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

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #222a46;

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