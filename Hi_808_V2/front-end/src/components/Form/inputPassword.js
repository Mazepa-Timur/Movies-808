import { useEffect, useRef, useState } from 'react'

import './inputPassword.css'

import passwordSvg from '../../img/passwordSvg.svg'
import passwordEyes from '../../img/passwordEyesSvg.svg'
import {RegExpPassword} from './constant.js'


const InputPassword = (props) => {
    document.body.style.overflowY = 'hidden';
    const hidePassword = useRef();
    const [isValidPassword, setIsValidPassword] = useState('');

    useEffect(()=>{
        setIsValidPassword(props.isValid)
    },[props.isValid]);

    const heandlerPassword = (event) => {
        if (RegExpPassword.test(hidePassword.current.value)) {
            props.savePassword(hidePassword.current.value);
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

    return(
        <div className='textBox'>
            <img src={passwordSvg} alt=''/>
            <input ref={hidePassword} className='password' onChange={heandlerPassword}  type='password' placeholder="your passwprd" />
            <img src={passwordEyes} className='passwordEyes' onClick={showPassword} alt=''/>
            {isValidPassword && <p className='errorText'>{isValidPassword}</p>}
        </div>
    )
}

export default InputPassword;