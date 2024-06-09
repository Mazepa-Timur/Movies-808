import React from 'react';


const SimpleInput = (props) => {
  return (
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
  );
};

export default SimpleInput;
