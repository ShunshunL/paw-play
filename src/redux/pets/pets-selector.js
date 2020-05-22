import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  'pugs': 1,
  'boston-terriers': 2,
  'dogs': 3,
  'cats': 4,
  'funny-cats': 5
}

const selectShop = state => state.pets

export const selectPets = createSelector(
  selectShop,
  pet => pet.collections
)

export const selectCategory = collectionUrlParam => createSelector(
  selectPets,
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)