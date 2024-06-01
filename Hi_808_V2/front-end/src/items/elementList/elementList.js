import React from 'react';

import './elementList.css';

const ElementList = (props) => {
  return (
    <div className="elementList">
      <p className='date'>{props.data.date}</p>
      <p>{props.data.name}</p>
    </div>
  );
};

export default ElementList;
