<script setup>
</script>

<template>
  <div class="m-4 inline-flex flex-col gap-4">
    <div>
      <nav class="inline-flex gap-2">
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/recept">recept</RouterLink>
        <RouterLink to="/player">player</RouterLink>
        <RouterLink to="/calendar">calendar</RouterLink>
        <RouterLink to="/math">math</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>


</style>
