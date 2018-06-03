<template>
	<div class="private-page">
		<div class="container mt-5">
			<div class="row">
				<div class="col text-center">

					<h1 class="mb-4">Privatløfteren</h1>

					<hr>
					<font-awesome-icon icon="smile" />
					<hr>

				 	<p class="mb-4">
				 		Gjør som Øyvind Årnes kjøp privatløfteren for kr 1500,- og få navnet ditt inngravert på veggen på stadion.
				 	</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	export default {
		computed: {
			icon () {
				return faSpinner
			}
		},
		components: {
		    FontAwesomeIcon
		  }
	};
</script>
<style></style>