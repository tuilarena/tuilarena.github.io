<template>
	<div class="customers-grid"> 
		<div class="customers">
			<div class="row">
				<div class="col mb-5">
					<customer v-for="(customer, index) in customers" :key="index" :customer="customer"></customer>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
	import Customer from './Customer.vue'
	import { mapActions, mapState, mapGetters } from 'vuex'
	export default {
		computed: {
			...mapState(['customers'])
		},
		methods: {
			...mapActions(['toggleHoverCustomer']),
			icon(customer) {
				if (customer.gender == '') {
					return 'question';	
				}
				
				return customer.gender == 'f' ? 'female' : 'male'
			}
		},
		components: {
			Customer
		}
	};
</script>
<style lang="scss">
	
</style>