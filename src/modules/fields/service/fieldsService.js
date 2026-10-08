import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase/firebase";

export async function getFields() {
  const fieldsRef = collection(db, "fields");

  const snapshot = await getDocs(fieldsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
