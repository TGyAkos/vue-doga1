<script setup>
import {computed, ref} from "vue";
import {CalendarListModel} from "../models/CalendarListModel.js";
import {CalendarModel} from "../models/CalendarModel.js";

const calendarList = ref(new CalendarListModel())
const currentCalendar = ref(new CalendarModel())

const alertUser = computed(() => {
  alert("MOST AZONNAL VEGYEN FEL EGY UJ FELHASZNALOT!!!111!!!!11!")
})


</script>

<template>
  <div>
    <div class="inline-flex flex-col gap-4">
      <input v-model="currentCalendar.name" placeholder="Name">
      <input v-model="currentCalendar.date" placeholder="date">
      <input v-model="currentCalendar.description" placeholder="description">
      <button @click="() => {calendarList.addCalendar(currentCalendar)}">Add calendar</button>
    </div>
    <div class="p-2">
      {{ currentCalendar.toString() }}
    </div>
    <div>
      <div v-if="calendarList.list.length === 0">
        {{alertUser}}
      </div>
      <ul class="flex flex-col items-start justify-start gap-4">
        <li v-for="item in calendarList.list" :key="item.id" class="p-0.5 rounded bg-gradient-to-r from-red-400 to to-orange-400">
          <div class="inline-flex gap-2 justify-start items-center py-4 px-4 rounded h-fit w-fit bg-gray-800">
            {{item.toString()}}
            <button @click="calendarList.removeCalendar(item.id)">Remove event</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>