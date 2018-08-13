<template>
	<div class="sponsors-page mt-5">
		<div class="container">
			<div class="row mb-5 text-center">
				<div class="col ml-5 mr-5">
					<h1 class="mb-5">Arenaløftere</h1>
					<p class="mb-5">TUIL er stolt over å ha gode partnere med på laget. Er ikke din bedrift her? Trykk på knappen under.</p>
					<a href="mailto:geir.arntzen@tuil.no?subject=Min bedrift ønsker å bli Arenaløfter" class="btn btn-primary">Bli arenaløfter</a>
				</div>
			</div>
			<div class="row align-items-center mb-5">
				<div class="col">
					<sponsors></sponsors>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Sponsors from './Sponsors'
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['sponsors'])
		},
		components: {
			Sponsors
		}
	};
</script>
<style lang="scss">
	$grey: #ccc;

	

</style>