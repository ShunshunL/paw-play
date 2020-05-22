import React from 'react';
import { Route } from 'react-router-dom'
import Collections from '../../components/collections/collections'
import CategoryPage from '../../pages/category/category'

const PetPage = ({ match }) => (
  <div className="pet-page">
    <Route exact path={`${match.path}`} component={Collections} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
)

export default PetPage