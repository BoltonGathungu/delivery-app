import axios from 'axios';
import { storage } from '../Firebase';
import { ref, uploadBytesResumable } from "@firebase/storage";

export const firebaseUploadImg = (file) => {
  const storageRef = ref(
    storage,
    `/files/images/${file.name}_${new Date().getTime()}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};