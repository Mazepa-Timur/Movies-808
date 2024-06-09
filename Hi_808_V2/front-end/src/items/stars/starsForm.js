import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMediaAction } from '../../store/actions/mediaAction';
import InputStar from './stars';

const FormStar = (props) => {
  const dispatch = useDispatch();
  const [isDisabled, setDisabled] = useState(true);
  const nameClass = !isDisabled ? 'star' : '';
  const isLogin = useSelector((state) => state.userStore.isLogin);

  if (isLogin && isDisabled) {
    setDisabled(false);
  }

  const starArr = [];
  if (!starArr[0]) {
    for (let index = 10; index > 0; index--) {
      starArr.push(
        <InputStar
          nameClass={nameClass}
          key={index}
          star={props.star}
          index={index}
          disabled={isDisabled}
        />
      );
    }
  }

  const rating = async (event) => {
    if (event.target.value) {
      console.log(event.target.value);
      if (props.id) {
        setMediaAction(
          { filmId: props.id, points: event.target.value },
          'rating'
        )(dispatch);
      }
    }
  };

  return (
    <React.Fragment>
      <form onClick={rating} name="formReting" className={'rating'}>
        {starArr}
      </form>
    </React.Fragment>
  );
};

export default FormStar;
