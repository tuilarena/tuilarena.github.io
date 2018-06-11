<template>
	<div class="sponsors-grid">
		<div class="container">
			<div class="row">
				<div class="col-6 col-md-4 col-lg-3 text-center" v-for="(sponsor, index) in sponsors" :key="index">
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