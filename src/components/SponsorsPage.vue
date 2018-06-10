<template>
	<div class="sponsors-page mt-5">
		<div class="container">
			<div class="row mb-5 text-center">
				<div class="col ml-5 mr-5">
					<h1 class="mb-5">Sponsorer</h1>
					<p class="mb-5">TUIL er stolte over å ha så mange fine sponsorer til. Er ikke din bedrift her? Trykk på knappen under.</p>
					<a href="#" class="btn btn-primary">Kjøp bedriftspakken</a>
				</div>
			</div>
			<div class="row align-items-center mb-5">
				<div class="col col-4 col-md-3 col-lg-2 text-center" v-for="(sponsor, index) in sponsors" :key="index">
					<sponsor :sponsor="sponsor"></sponsor>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Sponsor from './Sponsor'
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['sponsors'])
		},
		components: {
			Sponsor
		}
	};
</script>
<style lang="scss">
	$grey: #ccc;

	

</style>