import React from 'react';

import './collectionCardsMedia.css';
import Card from '../../items/card/cardMedia';

const CollectionCardsMedia = (props) => {
  return (
    <section className="collectionCards">
      {Array.isArray(props.data) && props.data.map((element, index)=>{
        return(
          <Card key={index} data={element}/>
        )
      })}
      
      {!props.data[0] && <p className='error'>Found nothing</p>}
    </section>
  );
};

export default CollectionCardsMedia;
