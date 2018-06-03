<template>
	<div class="private-page">
		<div class="container mt-5 mb-5">
			<div class="row">
				<div class="col text-center">

					<h1 class="mb-5">Privatløfteren</h1>
					<h4 class="mb-5">Disse stolte Tromsdalingene har allerede støttet utbyggingen ved å kjøpe sitt navn på stadion for evig tid.</h4>

					<div class="row">
						<div class="col mb-5">
							<font-awesome-icon 
								:icon="icon(customer)" 
								size="3x" 
								v-for="(customer, index) in customers" 
								:key="index" 
								class="mr-3 mb-3" />
						</div>
					</div>

					<div class="row">
						<div class="col">
							<span class="name mr-1" v-for="(customer, index) in customers">
								{{ customer.firstname }} {{ customer.lastname }}<span v-if="index+1 < customers.length">, </span>
							</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['customers'])
		},
		methods: {
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
<style lang="scss">
	.fa-male {
		color: cornflowerblue;
	}

	.fa-female {
		color: hotpink;
	}

	.name {
		font-size: .9rem;
	}

	h4 {
		font-weight: 300;
	}
</style>