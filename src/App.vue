<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {Song} from "./types"
import { getSongs } from './firebase/songs'
import SongList from './components/SongsList.vue'


// const songs: Song[] = reactive([])
const songs  = ref<Song[]>([])

onMounted(async () => {
  getSongs(songs)
})

</script>

<template>
  <main>
    <SongList :songs="songs"/>
  </main>
</template>

<style scoped></style>
