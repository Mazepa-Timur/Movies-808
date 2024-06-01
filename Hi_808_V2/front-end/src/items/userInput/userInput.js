import React from 'react';


const UserInput = (props) => {
  return (
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
  );
};

export default UserInput;
