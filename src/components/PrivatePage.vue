<template>
	<div class="private-page">
		<div class="container mt-5 mb-5">
			<div class="row">
				<div class="col text-center">

					<h1 class="mb-5">Privatløfteren</h1>
					<h4 class="mb-5">Disse stolte Tromsdalingene har allerede støttet utbyggingen ved å kjøpe sitt navn på stadion for evig tid.</h4>

					<div class="row">
						<div class="col mb-5">
							<customer v-for="(customer, index) in customers" :key="index" :customer="customer"></customer>
						</div>
					</div>

					<div class="row">
						<div class="col">
							<span class="name mr-1" v-for="(customer, index) in customers">
								<span :class="{hover: customer.hover == true}" class="label">{{ customer.firstname }} {{ customer.lastname }}</span>
								<span v-if="index+1 < customers.length"> &bull;</span>
							</span>
						</div>
					</div>

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
	.fa-male {
		color: cornflowerblue;
	}

	.fa-female {
		color: hotpink;
	}

	.name {
		font-size: .9rem;

		.label {
			white-space: nowrap;
			&.hover {
				font-weight: bold;
			}
		}
	}

	h4 {
		font-weight: 300;
	}
</style>