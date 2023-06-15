<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {Song} from "./types"
import { getSongs, addSongs } from './firebase/songs'
import SongList from './components/SongsList.vue'
import SongsPlayer from './components/SongsPlayer.vue'


// const songs: Song[] = reactive([])
const songs  = ref<Song[]>([])

  const playingSongs: Song[] = [
  {
    id: '1',
    title: 'So What',
    artist: 'Miles Davis',
    year: 1959,
  },
  {
    id: '2',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
  },
  {
    id: '3',
    title: 'What a Wonderful World',
    artist: 'Louis  Armstrong',
    year: 1967,
  },
  {
    id: '4',
    title: 'The Look',
    artist: 'Roxette',
    year: 1988,
  },
]

onMounted(async () => {
  getSongs(songs)
})

const addToFavourite = async (songId: string) => {
  const song = playingSongs.find((song) => song.id === songId)
  if(song) {
    await addSongs(song)
  }
}
</script>

<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favorite="addToFavourite"/>
    <SongList :songs="songs"/>
  </main>
</template>

<style scoped></style>
