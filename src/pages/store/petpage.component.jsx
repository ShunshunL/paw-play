import React, {Component} from 'react';
import SHOP_DATA from './shop.data';
import Preview from '../../components/preview/preview.component'

class PetPage extends Component {
   constructor(props) {
     super(props);

     this.state = {
       collections: SHOP_DATA
     }
   }

   render() {
     const {collections} = this.state;
     return (<div className="pet-page">
       {
         collections.map(({id, ...collectionProps}) => (
          <Preview key={id} {...collectionProps} />
         ))
       }
     </div>
     )
   }
}

export default PetPage