<script setup>

import {ref} from "vue";

const mathExp = ref("")
const showTotal = ref({is: false, total: 0, error: null })

const calc = () => {
  showTotal.value.is = true
  if (!(/\d/).test(mathExp.value)) {
    showTotal.value.error = "does not include a number"
  } else {
    showTotal.value.error = null
    showTotal.value.total = eval(mathExp.value)
  }
}

</script>

<template>
<div class="inline-flex flex-col gap-2">
  <input v-model="mathExp" placeholder="math expression">
  <button v-if="mathExp !== ''" @click="calc()">Calculate expression</button>
  <div v-if="showTotal.is" class="p-0.5 rounded bg-gradient-to-r from-red-400 to to-orange-400">
    <p v-if="showTotal.error !== null" class="inline-flex justify-center py-4 px-4 rounded h-fit w-full bg-gray-800">{{showTotal.error}}</p>
    <p v-else class="inline-flex justify-center py-4 px-4 rounded h-fit w-full bg-gray-800">Value: {{showTotal.total}}</p>
  </div>
</div>
</template>

<style scoped>

</style>