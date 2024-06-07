<template>
  <main>
    <h1>{{ pageTitle }}</h1>
    <NuxtLink to="/random-users"> Buscar usuário aleatório </NuxtLink>
  </main>
</template>

<script lang="ts" setup>
const pageTitle = ref("Welcome");
</script>
