<template>
	<div class="container">
		<div class="row">
			<div class="col text-center p">
				<font-awesome-icon icon="frown" size="3x" class="mb-5" />
				<h3>Beklager, vi kan ikke finne siden</h3>
			</div>
		</div>
	</div>
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	export default {
		components: {
			FontAwesomeIcon
		}
	};
</script>
<style>
	.p {
		padding: 100px 20px;
	}
</style>