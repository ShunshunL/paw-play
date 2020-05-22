import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview from '../../components/preview/preview.component'
import {selectPets} from '../../redux/pets/pets-selector'
import './collections.scss'

const Collections = ({collections}) => (
  <div className="collections">
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

export default connect(mapStateToProps)(Collections)