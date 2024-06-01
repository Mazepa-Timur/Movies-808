import { useEffect, useState } from 'react'

import './inputEmail.css'

import emailSvg from '../../img/emailSvg.svg'
import {RegExpGmail} from './constant.js'


const InputEmail = (props) => {
    document.body.style.overflowY = 'hidden';
    const [isValidEmail, setIsValidEmail] = useState('');

    useEffect(()=>{
        setIsValidEmail(props.isValid)
    },[props.isValid]);

    const heandlerEmail = (event) => {
        if (RegExpGmail.test(event.target.value)) {
            props.saveEmail(event.target.value);
            setIsValidEmail('');
        } else {
            setIsValidEmail('Incorrect email !');
        }
    }

    return(
        <div className='textBox'>
            <img src={emailSvg} alt=''/>
            <input onChange={heandlerEmail} className='textInput' type='text' placeholder="your email"></input>
            {isValidEmail && <p className='errorText'>{isValidEmail}</p>}
        </div>
    )
}

export default InputEmail;