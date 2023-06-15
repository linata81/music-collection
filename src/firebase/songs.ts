import { db } from '../firebase/config';
import { collection, query, onSnapshot,  addDoc, deleteDoc, doc } from "firebase/firestore";
import {Song} from "../types"
import { Ref } from 'vue';

const DB_NAME = 'songs'

export const getSongs = (songs: Ref<Song[]>) => {
  
  const q = query(collection(db, DB_NAME));

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
}

export const addSongs = async (song:Song) => {
  await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year
  });
}

export const deleteSong  = async (songId:string) => {
  await deleteDoc(doc(db, DB_NAME, songId));
}