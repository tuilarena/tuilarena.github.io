<template>
<nav>
	<div class="container-fluid">
		<div class="row mt-4">
			<div class="col text-right pr-4">
				<font-awesome-icon icon="times" @click="toggleOverlayMenu()" style="cursor: pointer" />
			</div>
		</div>

		<div class="row mb-2">
			<div class="col text-center pr-4 pl-4">
				<img src="../assets/tuil-logo.svg" style="width: 5rem;" class="mb-3">
				<h4>Støtt TUIL og bli en arenaløfter!</h4>
				<p>
					Vi er glade for å kunne tilby en markedsarena der alle våre medspillere kan bidra til utviklingen i TUIL og Tromsdalen. Vi serverer gode opplevelser og inspirerer til økt lønnsomhet for våre medspillere.
				</p>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-12 text-center pr-4 pl-4 support-as-text">
				<p>
					Bli Arenaløfter
				</p>
			</div>
			<div class="col pl-4">
				<router-link to="/privat" class="btn btn-primary btn-block" @click.native="private()">Privatperson</router-link>
			</div>
			<div class="col pr-4">
				<router-link to="/bedrift" class="btn btn-primary btn-block" @click.native="business()">Bedrift</router-link>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-12 text-center pr-4 pl-4 support-as-text">
				<p>
					TUIL takker disse
				</p>
			</div>
			<div class="col pl-4">
				<router-link to="/privat" class="btn btn-primary btn-block" @click.native="private()">Personer</router-link>
			</div>
			<div class="col pr-4">
				<router-link to="/bedrift" class="btn btn-primary btn-block" @click.native="business()">Bedrifter</router-link>
			</div>
		</div>
	</div>
</nav>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
	computed: {
		...mapState(['showOverlayMenu'])
	},
	methods: {
		...mapActions(['toggleOverlayMenu']),

		private() {
			this.toggleOverlayMenu()
		},

		business() {
			console.log('business')
			this.toggleOverlayMenu()
		}
	},
	components: {
		FontAwesomeIcon
	}
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

nav {
	position: fixed;
	overflow: auto;
	background-color: #222a46;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	color: #fff;

	.support-as-text {
		font-weight: 100;
		text-transform: uppercase;
		font-size: .8rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			margin: 0;
		}
	}
}

</style>