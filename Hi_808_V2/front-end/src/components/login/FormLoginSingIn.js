import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './userLogin.css'

import {userAction} from '../../store/user.js'
import {themeAction} from '../../store/theme.js'
import {activityAction} from '../../store/activity.js'

import API from '../Database/authorization.js'
import InputEmail from '../Form/inputEmail'
import InputPassword from '../Form/inputPassword'

const FormLoginSingIn = (props) => {
    document.body.style.overflowY = 'hidden';
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const [isValidData, setIsValidData] = useState('');
    const [isValidEmail, setIsValidEmail] = useState('');
    const [isValidPassword, setIsValidPassword] = useState('');

    useEffect(()=>{
        if (userEmail && userPassword) {
            setIsValidData(true)
        }
    },[userEmail, userPassword]);

    const saveData = async () => {
        if (userEmail && userPassword) {
            const formData = {
                email: userEmail, 
                password: userPassword
            }
            const res = await API.login(formData);
            if (res.name) {
                document.body.style.overflowY = 'auto';
                dispatch(userAction.updateData(res));
                dispatch(themeAction.updataSetting(res.setting));
                dispatch(activityAction.isActivity({typeLogin: '', isLogin: 'user'}));
            } else if (res === 'incorrect password') {
                setIsValidPassword(res);
            } else if (res === 'Email incorrect') {
                setIsValidEmail(res);
            }
        } else {
            console.error('incorect form data');
        }
    }

    return(
        <form className={`loginForm ${props.theme}`}>
            <label className='headForm'>Sing in Form</label>
            <InputEmail saveEmail={setUserEmail} isValid={isValidEmail}/>
            <InputPassword savePassword={setUserPassword} isValid={isValidPassword}/>
            {/* <a href='/ChangePassword' className='linkButton'>password?</a> */}
            <button className='sendButton' disabled={!isValidData} onClick={saveData} type='button'>Sing in</button>
        </form>
    )
}

export default FormLoginSingIn;