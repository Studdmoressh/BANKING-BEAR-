import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function CommentBox() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "comments"), (snapshot) => {
      setComments(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  const submit = async () => {
    if (!text) return;
    await addDoc(collection(db, "comments"), { text });
    setText("");
  };

  return (
    <div className="p-4">
      <h2 className="text-lg mb-2">Comments</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} className="p-2 text-black" placeholder="Write comment..." />
      <button onClick={submit} className="bg-brandPurple p-2 ml-2">Submit</button>
      <ul className="mt-4">
        {comments.map((c, i) => (
          <li key={i} className="p-2 border-b border-gray-700">{c.text}</li>
        ))}
      </ul>
    </div>
  );
}
