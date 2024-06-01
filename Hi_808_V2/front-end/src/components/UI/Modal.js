import React from "react"
import ReactDOM from 'react-dom';

import UserLogin from "../login/userLogin";

const portalElement = document.getElementById('overlays');

const Modal = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<UserLogin /> , portalElement)}
        </React.Fragment>
    )
}
export default Modal;