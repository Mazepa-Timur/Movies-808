import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";


const ForgotPassword = (props) => {
  const cookies = new Cookies();

  document.body.style.overflowY = 'hidden';
  const dispatch = useDispatch();


  return (
        <div className='exitAccaunt'>
            <h2>{`Exit accaunt ${user.name} ?`}</h2>
            <div className='boxButton'>
                <button onClick={exitAccaunt}>Okey</button>
                <button onClick={closeWindow}>Close</button>
            </div>
        </div>
  );
};

export default ForgotPassword;