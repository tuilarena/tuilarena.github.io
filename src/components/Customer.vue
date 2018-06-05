<template>
	<div class="customer">
		<font-awesome-icon 
			:icon="icon(customer)" 
			size="3x" 
			class="mr-2 ml-2 mb-4"
			@mouseover="toggleHoverCustomer(customer)"
			@mouseout="toggleHoverCustomer(customer)" />
	</div>
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { mapActions } from 'vuex'
	export default {
		props: ['customer'],
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
			FontAwesomeIcon
		}
	};
</script>
<style lang="scss" scoped>
	.customer {
		display: inline-block;
	}
</style>