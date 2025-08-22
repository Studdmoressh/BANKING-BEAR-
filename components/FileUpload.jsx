import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function FileUpload() {
  const [progress, setProgress] = useState(0);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => console.error(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          alert("File uploaded: " + url);
        });
      }
    );
  };

  return (
    <div className="p-4">
      <input type="file" onChange={uploadFile} />
      <p>Progress: {Math.round(progress)}%</p>
    </div>
  );
}
