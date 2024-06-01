import React from 'react';
import { useDispatch } from 'react-redux';

import './settingForm.css';
import { setSettingAction } from '../../store/actions/settingAction';

const SettingForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const localTheme = localStorage.getItem('theme');
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    setSettingAction({ color: formData.color, theme: localTheme }, 'setting')(dispatch);
  };

  return (
    <form onSubmit={handleSubmit} className="SettingForm">
      <div className="SettingBox">
        <input className="colorInput" type={'color'} name={'color'} />
      </div>
      <button className="sendButton" type="submit">
        Save
      </button>
    </form>
  );
};

export default SettingForm;
