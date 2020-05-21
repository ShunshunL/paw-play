import { createSelector } from 'reselect'

const selectShop = state => state.pets

export const selectPets = createSelector(
  selectShop,
  pet => pet.collections
)