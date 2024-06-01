import React from 'react';

const InputStar = (props) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={`star-${props.index}`}
        name="rating"
        defaultChecked={props.star === props.index}
        value={props.index}
        disabled={props.disabled}
      />
      <label className={props.nameClass} htmlFor={`star-${props.index}`}></label>
    </React.Fragment>
  );
};

export default InputStar;
