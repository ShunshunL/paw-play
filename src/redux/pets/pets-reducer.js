import PETS_DATA from './pets.data'

const INITIAL_STATE = {
  collections: PETS_DATA
}

const petsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state;
  }
}

export default petsReducer