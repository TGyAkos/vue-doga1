<script setup>
import {ref} from "vue";
import {PlayerListModel} from "../models/PlayerListModel.js";
import {PlayerModel} from "../models/PlayerModel.js";

const currentPlayer = ref(new PlayerModel())
const playerList = ref(new PlayerListModel())

</script>

<template>
  <div>
    <div class="inline-flex flex-col gap-4">
      <input v-model="currentPlayer.name" placeholder="Name">
      <button @click="() => {
        playerList.addPlayer(currentPlayer)
      }">Add player</button>
    </div>
    <div class="p-2">
      {{ currentPlayer.toString() }}
    </div>
    <div>
      <ul class="flex flex-col items-start justify-start gap-4">
        <li v-for="item in playerList.playerList" :key="item.id" class="p-0.5 rounded bg-gradient-to-r from-red-400 to to-orange-400">
          <div class="inline-flex gap-2 justify-start items-center py-4 px-4 rounded h-fit w-fit bg-gray-800">
            {{item.name}}'s Counter {{item.counter}}
            <button @click="item.counter++">Add</button>
            <button v-if="item.counter > 0" @click="item.counter--">Subtract</button>
            <button @click="playerList.removePlayer(item.id)">Remove player</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>