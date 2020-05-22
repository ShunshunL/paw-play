import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview from '../../components/preview/preview.component'
import {selectCollectionSample} from '../../redux/pets/pets-selector'
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
  collections: selectCollectionSample
})

export default connect(mapStateToProps)(Collections)