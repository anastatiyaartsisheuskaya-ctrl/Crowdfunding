import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { db } from "../../../api/firebase";

const sortOptions = {
  "price-asc": (a, b) => a.price.value - b.price.value,
  "price-desc": (a, b) => b.price.value - a.price.value,
  "size-desc": (a, b) => b.size.value - a.size.value,
  "size-asc": (a, b) => a.size.value - b.size.value,
};

export async function getFields({ sort = "none", filters = {} } = {}) {
  const snapshot = await getDocs(collection(db, "fields"));

  let fields = snapshot.docs.map((document) => ({
    ...document.data(),
  }));

  const { country, size, guidePrice, name } = filters;

  if (country?.trim()) {
    fields = fields.filter(
      (field) =>
        field.location.country?.toLowerCase() === country.trim().toLowerCase(),
    );
  }

  if (size !== "" && size != null) {
    fields = fields.filter((field) => field.size.value === Number(size));
  }

  if (guidePrice !== "" && guidePrice != null) {
    fields = fields.filter((field) => field.price.value === Number(guidePrice));
  }

  if (name?.trim()) {
    const searchName = name.trim().toLowerCase();

    fields = fields.filter((field) =>
      field.title?.toLowerCase().includes(searchName),
    );
  }

  if (sortOptions[sort]) {
    fields.sort(sortOptions[sort]);
  }

  return fields;
}

export async function getFieldDetails(id) {
  const fieldsQuery = query(
    collection(db, "fields"),
    where("id", "==", Number(id)),
  );

  const snapshot = await getDocs(fieldsQuery);

  if (snapshot.empty) {
    throw new Error("Field not found");
  }

  const document = snapshot.docs[0];

  return {
    ...document.data(),
    firestoreId: document.id,
  };
}
