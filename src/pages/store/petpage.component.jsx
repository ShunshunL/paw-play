import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Preview from '../../components/preview/preview.component'
import {selectPets} from '../../redux/pets/pets-selector'

const PetPage = ({collections}) => (
  <div className="pet-page">
    {
      collections.map(({id, ...collectionProps}) => (
      <Preview key={id} {...collectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectPets
})

export default connect(mapStateToProps)(PetPage)