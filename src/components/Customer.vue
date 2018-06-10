<template>
	<div 
		class="customer" 
		:class="{male: customer.gender == 'm', female: customer.gender == 'f', hovering: isHovering}"
		@mouseover="hoverCustomer()"
		@mouseout="houtCustomer()">
		<font-awesome-icon 
			:icon="icon(customer)" 
			size="3x" 
			class="mr-2 ml-2 mb-4" />
		<div ref="label" class="label" :style="{ left: labelLeft + 'px'}">{{ customer.firstname }} {{ customer.lastname }}</div>
	</div>
</template>
<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { mapActions } from 'vuex'
	export default {
		props: ['customer'],
		data() {
			return {
				isMounted: false,
				labelLeft: 0,
				isHovering: false
			}
		},
		methods: {
			...mapActions(['toggleHoverCustomer']),
			icon(customer) {
				if (customer.gender == '') {
					return 'question';	
				}
				return customer.gender == 'f' ? 'female' : 'male'
			},
			hoverCustomer() {
				this.isHovering = true
				this.labelLeft = (this.$refs.label.offsetWidth / 2 * -1) + this.$el.offsetWidth / 2
				this.toggleHoverCustomer(this.customer)
			},
			houtCustomer() {
				this.isHovering = false
				this.toggleHoverCustomer(this.customer)
			}
		},
		components: {
			FontAwesomeIcon
		},
		mounted() {
			this.isMounted = true
		}
	};
</script>
<style lang="scss" scoped>
	.customer {
		display: inline-block;
		position: relative;
		transition: transform .2s;

		color: cornflowerblue;

		&.female {
			color: hotpink;
			&:hover {
				transform: rotate(-10deg) scale(1.5)
			}
		}

		.label {
			display: none;
			background-color: #000;
			color: #fff;
			position:absolute;
			white-space: nowrap;
			font-size: .5em;
			font-weight: 600;
			padding: 4px 4px 2px 5px;
			left: -50%;
			vertical-align: middle;
			text-transform: uppercase;
			letter-spacing: .05em;
			line-height: 1.00;
			border: solid 1px #fff;
		}

		&:hover {
			transform: rotate(10deg) scale(1.5);
			z-index: 100000;

			.label {
				display: block;
				top: 40px;
			}
		}
	}
</style>