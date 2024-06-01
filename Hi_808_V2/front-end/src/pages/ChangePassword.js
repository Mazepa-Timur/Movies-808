

//  В разработке.



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import './Movies.css'
// import { activityAction } from '../store/activity.js';
// import InputEmail from '../components/Form/inputEmail.js';
// import user from '../store/user.js';


// const ChangePassword = () => {
//     const dispatch = useDispatch();
//     const {theme} = useSelector(state => state.themeStyle);
//     const [page, setPage] = useState('inputEmail');
//     const [userEmail, setUserEmail] = useState('');
//     // const [userPassword, setUserPassword] = useState('');

//     const [isValidData, setIsValidData] = useState(false);
//     const [isValidEmail, setIsValidEmail] = useState('');
//     // const [isValidPassword, setIsValidPassword] = useState('');
//     dispatch(activityAction.isActivity({pageOpen: page}))
//     useEffect(()=>{
//         if ( userEmail ) {
//             setIsValidData(true);
//         }
//     },[userEmail]);
// //   const {theme} = useSelector(state => state.themeStyle);
//     const nextForm = () => {
//         setPage('imputPassword')
//     }

//     const sendEmail = () => {
//         if (userEmail) {
//         setIsValidData(true)
//         if (userEmail) {
//             console.log(userEmail);
            
//         } else {
//             console.log('err');
//         }
//         }
//     }

//   return (
//       <div>
//         <form className={`loginForm ${theme}`}>
//             <label className='headForm'>Register Form</label>
//             <InputEmail saveEmail={setUserEmail} isValid={isValidEmail}/>
//             {/* <CreatePassword savePassword={setUserPassword} isValid={isValidPassword} /> */}
//             <button className='sendButton' disabled={!isValidData} onClick={sendEmail} type='button'>next</button>
//         </form>
//         {page === 'inputEmail' && <p onClick={nextForm}>Email</p>}
//         {page === 'imputPassword' && <p>Password</p>}
//         <p>rgegrerg</p>
//       </div>
//   );
// }

// export default ChangePassword;