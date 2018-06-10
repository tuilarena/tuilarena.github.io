<template>
	<div class="sponsors-grid">
		<div class="container">
			<div class="row">
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
<style></style>