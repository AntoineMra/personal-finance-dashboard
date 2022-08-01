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
</style>