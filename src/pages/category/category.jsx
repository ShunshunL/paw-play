import React from 'react' 
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item-component'
import { selectCategory } from '../../redux/pets/pets-selector'
import './category.scss'

const CategoryPage = ({collection}) => {
  const {title, items} = collection
  return (
  <div className="category">
    <h2 className="title">{title}</h2>
    <div className="items">
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>)
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)