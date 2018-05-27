<template>
<nav>
	<div class="container-fluid">
		<div class="row mt-4">
			<div class="col text-right pr-4">
				<i class="fas fa-times" @click="$emit('close')"></i>
			</div>
		</div>

		<div class="row mb-2">
			<div class="col text-center pr-4 pl-4">
				<img src="../assets/tuil-logo.svg" style="width: 5rem;" class="mb-3">
				<h4>Støtt TUIL og bli en arenaløfter!</h4>
				<p>
					Vi er glade for å kunne tilby en markedsarena der alle våre medspillere kan bidra til utviklingen i TUIL og Tromsdalen. Vi serverer gode opplevelser og inspirerer til økt lønnsomhet for våre medspillere.
				</p>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-12 text-center pr-4 pl-4 support-as-text">
				<p>
					Støtt TUIL som
				</p>
			</div>
			<div class="col pl-4">
				<a href="#" class="btn btn-primary btn-block">Privatperson</a>
			</div>
			<div class="col pr-4">
				<a href="#" class="btn btn-primary btn-block">Bedrift</a>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col pr-4 pl-4">
				<ul>
					<li><a href="#" class="text-white">Se hvem som allerede har kjøpt</a></li>
					<li><a href="#" class="text-white">TUIL takker disse bedriftene</a></li>
				</ul>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col">
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
				<p>hei</p>
			</div>
		</div>
	</div>
</nav>
</template>
<script>
export default {
	methods: {
		close: () => {
			console.log(this)
		}
	}
};
</script>
<style lang="scss" scoped>
$blue: rgb(35,46,86);
$yellow: rgb(255,166,17);
$white_bg: #f7f7f7;

$font-family: 'Roboto', sans-serif;

nav {
	position: fixed;
	overflow: auto;
	background-color: #222a46;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	color: #fff;

	.support-as-text {
		font-weight: 100;
		text-transform: uppercase;
		font-size: .8rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			margin: 0;
		}
	}
}

</style>