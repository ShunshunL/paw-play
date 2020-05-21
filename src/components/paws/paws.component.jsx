import React from 'react';
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import Paw from '../paw/paw.component'
import './paws.styles.scss'

const Paws = ({sections}) => (
  <div className="paws">
    {
      sections.map(({ id, ...sectionProps}) => (
        <Paw key={id} {...sectionProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Paws);