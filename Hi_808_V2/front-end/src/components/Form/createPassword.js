import React, { useEffect, useRef, useState } from 'react'

import './createPassword.css'

import passwordSvg from '../../img/passwordSvg.svg'
import passwordEyes from '../../img/passwordEyesSvg.svg'
import passwordSecuritySvg from '../../img/passwordSecuritySvg.svg'
import {RegExpPassword} from './constant.js'
const CreatePassword = (props) => {
    document.body.style.overflowY = 'hidden';
    const [userPassword, setUserPassword] = useState('');
    const hidePassword = useRef();

    const [isValidPassword, setIsValidPassword] = useState('');
    const [isValidRepeatPassword, setIsValidRepeatPassword] = useState('');

    useEffect(()=>{
        setIsValidPassword(props.isValid)
    },[props.isValid]);

    const heandlerPassword = (event) => {
        if (RegExpPassword.test(hidePassword.current.value)) {
            setUserPassword(event.target.value)
            setIsValidPassword('');
        } else {
            setIsValidPassword('Incorrect password !');
        }
    }
    const showPassword = () => {
        if (hidePassword.current.type === 'password') {
            hidePassword.current.type = 'text';
        } else {
            hidePassword.current.type = 'password';
        }
    }
    const heandlerRepeatPassword = (event) => {
        if (event.target.value === userPassword) {
            props.savePassword(userPassword);
            setIsValidRepeatPassword('')
            
        } else {
            setIsValidRepeatPassword('Incorrect password !')
        }
    }

    return(
        <React.Fragment>
            <div className='textBox'>
                <img src={passwordSvg} alt=''/>
                <input ref={hidePassword} onChange={heandlerPassword} className='password'  type='password' placeholder="your password"></input>
                <img src={passwordEyes} className='passwordEyes' onClick={showPassword} alt=''/>
                {isValidPassword && <p className='errorText'>{isValidPassword}</p>}
            </div>
            <div  className='textBox'>
                <img src={passwordSecuritySvg} alt=''/>
                <input onChange={heandlerRepeatPassword} className='textInput' type='password' placeholder="repeat your password"></input>
                {isValidRepeatPassword && <p className='errorText'>{isValidRepeatPassword}</p>}
            </div>
        </React.Fragment>
    )
}

export default CreatePassword;