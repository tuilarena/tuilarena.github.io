<template>
	<div class="sponsor">
		<a :href="sponsor.url" alt=":sponsor.name" target="_blank">
        	<img :src="path" :title="sponsor.name">
      	</a>
	</div>
</template>
<script>
	export default {
		props: ['sponsor'],
		computed: {
			path() {
				return require('@/assets/sponsors/' + this.sponsor.image)
			}
		}
	};
</script>
<style lang="scss">
	.sponsor {
		padding: 30px 20px;
		a {
			img {
				max-width: 100%;
				max-height: 50px;
			}
		}
	}
</style>