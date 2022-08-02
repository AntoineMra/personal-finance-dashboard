<template>
	<section class="glass w-full mb-10">
		<div class="flex justify-between">
			<h2 class="py-8 px-8 text-2xl flex-shrink-0">Moyenne de mes derniers {{props.transacType}}</h2>
		</div>
	</section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
		transacType : {type: String, required: true},
	})
</script>

<style lang="scss" scoped>
</style>