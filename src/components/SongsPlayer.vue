<script setup lang="ts"></script>

<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      Song title
    </v-card-text>
    <v-card-actions>
      <v-btn>Add to favourites</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.player {
  margin-bottom: 20px;
}
</style>