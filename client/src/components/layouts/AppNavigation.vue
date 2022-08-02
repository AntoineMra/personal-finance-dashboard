<template>
	<nav class="absolute left-0 top-0 h-full bg-stone-200/80 w-52 shadow-sm hover:shadow-xl py-16 px-8 flex flex-col justify-between items-center">		
		<ul class="nav-list text-slate-800">
			<h2 class="font-bold text-3xl py-8 text-center">Personal Finance</h2>

			<li class="py-4">
				<router-link to="/" class="flex text-slate-400 hover:text-slate-500 transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
				<span class="ml-2 text-lg text-slate-500">Dashboard</span></router-link>
			</li>

			<li class="py-4">
				<router-link to="/budget" class="flex text-slate-400 hover:text-slate-500 transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
					</svg>
				<span class="ml-2 text-lg text-slate-500">Budgets</span></router-link>
			</li>

			<li class="py-4">
				<router-link to="/invest" class="flex text-slate-400 hover:text-slate-500 transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				<span class="ml-2 text-lg text-slate-500">Supports</span></router-link>
			</li>

			<li class="py-4">
				<router-link to="/goals" class="flex text-slate-400 hover:text-slate-500 transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				<span class="ml-2 text-lg text-slate-500">Objectifs</span></router-link>
			</li>
		</ul>

		<p class=" text-gray-700 mb-8">Créé par <span class="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-fill-color">Antoine Marionneau</span></p>
    </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
	.router-link-active{
		color: #a855f7 !important;
		span{
			color: #a855f7 !important;
		}
	}

	.text-fill-color{
		-webkit-text-fill-color: transparent;
	}
</style>