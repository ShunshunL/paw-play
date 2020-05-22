import { createSelector } from 'reselect'

const selectShop = state => state.pets

export const selectPets = createSelector(
  selectShop,
  pet => pet.collections
)

export const selectCollectionSample = createSelector(
  selectPets,
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCategory = collectionUrlParam => createSelector(
  selectPets,
  collections => collections[collectionUrlParam]
)