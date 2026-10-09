import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { db } from "../../../api/firebase/firebase";

const sortOptions = {
  "price-asc": ["price.value", "asc"],
  "price-desc": ["price.value", "desc"],
  "size-desc": ["size.value", "desc"],
  "size-asc": ["size.value", "asc"],
};

export async function getFields({ sort = "none", filters = {} } = {}) {
  const constraints = [];

  const country = filters.country?.trim();
  const size = filters.size;
  const guidePrice = filters.guidePrice;

  if (country) {
    constraints.push(where("location.country", "==", country));
  }

  if (size !== "" && size !== undefined && size !== null) {
    constraints.push(where("size.value", "==", Number(size)));
  }

  if (guidePrice !== "" && guidePrice !== undefined && guidePrice !== null) {
    constraints.push(where("price.value", "==", Number(guidePrice)));
  }

  const sortOption = sortOptions[sort];

  if (sortOption) {
    constraints.push(orderBy(sortOption[0], sortOption[1]));
  }

  const fieldsQuery = query(collection(db, "fields"), ...constraints);

  const snapshot = await getDocs(fieldsQuery);

  let fields = snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));

  const name = filters.name?.trim().toLowerCase();

  if (name) {
    fields = fields.filter((field) =>
      field.title?.toLowerCase().includes(name),
    );
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
