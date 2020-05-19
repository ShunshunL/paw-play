import React, {Component} from 'react';
import Paw from '../paw/paw.component'
import './paws.styles.scss'

class Paws extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'pugs',
          imageUrl: 'https://images.unsplash.com/photo-1499938971550-7ad287075e0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80',
          id: 1,
          linkUrl: 'shop/pugs'
        },
        {
          title: 'boston terriers',
          imageUrl: 'https://images.unsplash.com/photo-1559165355-a20b1f13bce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
          id: 2,
          linkUrl: 'shop/boston-terriers'
        },
        {
          title: 'dogs',
          imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
          id: 3,
          linkUrl: 'shop/dogs'
        },
        {
          title: 'cats',
          imageUrl: 'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2478&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/cats'
        },
        {
          title: 'funny cats',
          imageUrl: 'https://images.unsplash.com/photo-1542665093852-744c79500d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2553&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/funny-cats'
        }
      ]   
    }
  }

  render() {
    return (
      <div className="paws">
        {
          this.state.sections.map(({ id, ...sectionProps}) => (
            <Paw key={id} {...sectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default Paws;