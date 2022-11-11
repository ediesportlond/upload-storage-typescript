import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, StorageReference } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCy-aENqkmeNuenZ6zF5WzIw2mv25AoD4E",
  authDomain: "upload-storage-ee.firebaseapp.com",
  projectId: "upload-storage-ee",
  storageBucket: "upload-storage-ee.appspot.com",
  messagingSenderId: "580799479912",
  appId: "1:580799479912:web:30b99747cac4654ae37bdd"
};


export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File|undefined>();

  const handleUpload = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!selectedFile){
      alert('Please select a file first');
      return
    }

    //connect to project on firebase
    const app = initializeApp(firebaseConfig);

    //connect to default bucket
    const storage = getStorage(app);

    const filename: string = encodeURI(selectedFile?.name);

    //create a reference to our file in storage
    const imageRef: StorageReference = ref(storage, `photos/${filename}`);

    //Todd's quick cheat- create URL from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-ee.appspot.com/o/photos%2F${filename}?alt=media`

    // //upload file to bucket
    uploadBytes(imageRef, selectedFile);
    //^ this is a promise. Will need to use async await or .then .catch
    //update db with url
  }
  return (
    <form onSubmit={handleUpload}>
      <input 
      type="file" 
      name="photo" 
      onChange={
        (e: React.FormEvent<HTMLInputElement> | any ): void => setSelectedFile(e.currentTarget.files[0])}/>
      <button>Upload</button>
    </form>
  )
}