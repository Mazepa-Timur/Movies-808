import React from 'react';

import './listСollection.css';
import ElementList from '../../items/elementList/elementList';

const ListСollection = (props) => {
  return (
    <section className="listСollection">
      {props.data.map((element, index) => {
        return <ElementList key={index} data={element} />;
      })}
    </section>
  );
};

export default ListСollection;
