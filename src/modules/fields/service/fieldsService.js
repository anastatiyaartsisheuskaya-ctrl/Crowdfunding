import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

import { db } from "../../../api/firebase/firebase";

const sortOptions = {
  "price-asc": ["price.value", "asc"],
  "price-desc": ["price.value", "desc"],
  "size-desc": ["size.value", "desc"],
  "size-asc": ["size.value", "asc"],
};

export async function getFields({ sort = "none", filters = {} } = {}) {
  const constraints = [];

  if (filters?.country?.trim()) {
    constraints.push(where("location.country", "==", filters.country.trim()));
  }

  if (Boolean(filters?.size)) {
    constraints.push(where("size.value", "==", Number(filters.size)));
  }

  if (Boolean(filters?.guidePrice)) {
    constraints.push(where("price.value", "==", Number(filters.guidePrice)));
  }

  const sortOption = sortOptions[sort];

  if (sortOption) {
    constraints.push(orderBy(sortOption[0], sortOption[1]));
  }

  console.log("constraints", constraints);

  const fieldsQuery = query(collection(db, "fields"), ...constraints);

  const snapshot = await getDocs(fieldsQuery);

  let fields = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (filters?.name?.trim()) {
    const searchName = filters.name.trim().toLowerCase();

    fields = fields.filter((field) =>
      field.title.toLowerCase().includes(searchName),
    );
  }

  return fields;
}
