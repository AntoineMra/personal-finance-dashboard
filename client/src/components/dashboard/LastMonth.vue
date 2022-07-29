<template>
	<section class="glass w-full">
		<div class="flex justify-between">
			<h2 class="py-8 px-8 text-2xl flex-shrink-0">Mon dernier mois</h2>
			<LastRecap />
		</div>
		<LastTransac />

	</section>
</template>

<script setup lang="ts">
import LastRecap from './LastRecap.vue';
import LastTransac from './LastTransac.vue';

</script>

<style lang="scss" scoped>
	.glass{
		background: rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
</style>