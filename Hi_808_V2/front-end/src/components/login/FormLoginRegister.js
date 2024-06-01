import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../store/user.js'
import { activityAction } from '../../store/activity.js'

import './userLogin.css'

import userSvg from '../../img/userSvg.svg'

import API from '../Database/authorization.js'
import InputEmail from '../Form/inputEmail.js'
import CreatePassword from '../Form/createPassword.js'

const FormLoginRegister = (props) => {
    const dispatch = useDispatch();
    document.body.style.overflowY = 'hidden';
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [isValidData, setIsValidData] = useState('');
    const [isValidName, setIsValidName] = useState('');
    const [isValidEmail, setIsValidEmail] = useState('');
    const [isValidPassword, setIsValidPassword] = useState('');


    const heandlerName = (event) => {
        if (event.target.value.length > 3) {
            setUserName(event.target.value);
            setIsValidName('');
        } else {
            setIsValidName('Incorrect name !')
            setIsValidData(false);
        }
    }
    useEffect(()=>{
        if (!isValidName && !isValidEmail && !isValidPassword) {
            setIsValidData(true)
        }
    },[isValidName, isValidEmail, isValidPassword]);

    const saveData = async () => {
        if (userName.length < 3) {
            setIsValidName('Incorrect name !')
        }
        if (userEmail && userPassword) {
            const formData = {
                name: userName,
                email: userEmail,
                password: userPassword
            }
            const res = await API.register(formData);
            if (res === 'USER CREATE') {
                
                document.body.style.overflowY = 'auto';
                const user = {name: userName}
                dispatch(userAction.updateData(user));
                dispatch(activityAction.typeLogin({typeLogin: ''}));
            }
            if (res === `"name" must only contain alpha-numeric characters`) {
                setIsValidPassword(res);
            }
            if (res === 'incorrect password') {
                setIsValidPassword(res);
            }
            if (res === 'Email incorrect') {
                setIsValidEmail(res)
            }
        } else {
            console.error('incorect form data');
        }
    }

    return(
        <form className={`loginForm ${props.theme}`}>
            <label className='headForm'>Register Form</label>
            <div className='textBox'>
                <img src={userSvg} alt=''/>
                <input onChange={heandlerName} className='textInput' type='text' placeholder="your name"></input>
                {isValidName && <p className='errorText'>{isValidName}</p>}
            </div>
            <InputEmail saveEmail={setUserEmail} isValid={isValidEmail}/>
            <CreatePassword savePassword={setUserPassword} isValid={isValidPassword} />
            <button className='sendButton' disabled={!isValidData} onClick={saveData} type='button'>register</button>
        </form>
    )
}

export default FormLoginRegister;