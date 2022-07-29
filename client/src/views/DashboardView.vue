<template>
  <div class="home py-12 px-10">
    <header class="py-8 pl-8">
      <h1 class="text-3xl font-bold">Finance Dashboard</h1>
    </header>
    <section class="flex items-center justify-between gap-40">
      <last-month />
      <div class="basis-5/12">
        <medium-income />
        <medium-expense />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import LastMonth from "@/components/dashboard/LastMonth.vue";
import MediumIncome from "../components/dashboard/MediumIncome.vue";
import MediumExpense from "../components/dashboard/MediumExpense.vue";

</script>

<style lang="scss">
  .home{
    min-height: 100vh;
    background-image:  linear-gradient(43deg, #4159d056 0%,rgba(200, 80, 192, 0.144) 46%, #ffcd7057 100%), url('@/assets/hero-bg-dashboard.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
