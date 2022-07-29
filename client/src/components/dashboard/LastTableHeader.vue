<template>
	<div class="flex items-center justify-between pb-4">
		<div class="items-center">
			<select name="" id="">
				<option value="Catégories" selected>Catégories</option>
			</select>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
			</div>
		</div>
		<div class="px-4">
			<button class="bg-purple-600 px-4 py-2 rounded-md text-white font-bold cursor-pointer">New Report</button>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
	.top-100 {top: 100%}
    .bottom-100 {bottom: 100%}
    .max-h-select {
        max-height: 300px;
    }
</style>