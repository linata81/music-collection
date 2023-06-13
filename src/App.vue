<script setup lang="ts">
import { onMounted } from 'vue';
import { collection, query, getDocs } from "firebase/firestore";
import {db} from './firebase/config';

onMounted(async () => {
  const q = query(collection(db, "songs"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
})

</script>

<template></template>

<style scoped></style>
