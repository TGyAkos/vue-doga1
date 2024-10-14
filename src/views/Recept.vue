<script setup>

import {ref} from "vue";
import {ReceptModel} from "../models/ReceptModel.js";
import {ReceptListModel} from "../models/ReceptListModel.js";

const receptList = ref(new ReceptListModel())
const currentRecept = ref(new ReceptModel())

</script>

<template>
<div>
  <div class="inline-flex flex-col gap-4">
    <input v-model="currentRecept.name" placeholder="Name">
    <input v-model="currentRecept.ingredients" placeholder="Ingredients">
    <input v-model="currentRecept.time" placeholder="time">
    <input v-model="currentRecept.description" placeholder="description">
    <button @click="() => {receptList.addRecept(currentRecept)}">Add recept</button>
  </div>
  <div class="p-2">
    {{ currentRecept.toString() }}
  </div>
  <div >
    <ul class="flex flex-col items-start justify-start gap-4">
      <li v-for="item in receptList.receptList" :key="item.id" class="p-0.5 rounded bg-gradient-to-r from-red-400 to to-orange-400">
         <div class="py-4 px-4 rounded h-fit w-fit bg-gray-800" >
         {{item.toString()}} <button @click="receptList.removeRecept(item.id)">Remove recept</button>
       </div>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>

</style>