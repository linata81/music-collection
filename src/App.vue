<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from './firebase/config';

interface Song {
  id: string
  title: string
  artist: string
  year: number
}

// const songs: Song[] = reactive([])
const songs  = ref<Song[]>([])

onMounted(async () => {
  const q = query(collection(db, "songs"));

  // простое подключение
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   songs.push({
  //     id: doc.id,
  //     ...doc.data(),
  //   } as Song) 
  // });

  
  // для работы обновлений в реальном времени
  onSnapshot(q, (querySnapshot) => {
    const tempSongs:Song[] = []

    querySnapshot.forEach((doc) => {
      tempSongs.push({
        id: doc.id,
        ...doc.data(),
      } as Song)
    });
    songs.value = tempSongs
  });
})

</script>

<template>
  <main>
    <v-card class="mx-auto pa-2" max-width="300">
      <v-list>
        <v-list-subheader>FAVOURITE SONGS</v-list-subheader>

        <v-list-item v-for="(song, i) in songs" :key="i" :value="song" color="primary" rounded="shaped">
          <template v-slot:prepend>
            <v-icon icon="mdi-headphones"></v-icon>
          </template>
          <v-list-item-title v-text="song.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </main>
</template>

<style scoped></style>
