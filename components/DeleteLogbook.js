import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";

export default function DeleteLogbook({ id, imageUrl }) {
  const [user] = useAuthState(auth);
  const handleDelete = async () => {
    try {
      // await deleteDoc(doc(db, "Reports", id));
      await deleteDoc(doc(db, `users/${user.uid}/Reports`, id));
      // const articleRef = collection(db, `users/${user.uid}/Reports`);
      toast("article deleted successfully", { type: "sucess" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("error deleting article", { type: "error" });
    }
  };
  return (
    <div>
      <button
        className="btn btn-danger"
        style={{ backgroundColor: "red" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
