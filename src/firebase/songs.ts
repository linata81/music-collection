import { db } from '../firebase/config';
import { collection, query, onSnapshot } from "firebase/firestore";
import {Song} from "../types"
import { Ref } from 'vue';

export const getSongs = (songs: Ref<Song[]>) => {
  
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
}