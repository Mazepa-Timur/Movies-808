import { Cookies } from "react-cookie";
const cookies = new Cookies();
const API = {
  register: async (request) => {
    try {
      const response = await fetch('http://localhost:8008/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      })
      const res = await response.json();
      if (response.ok === false) {
        throw res.message
      } else {
        return 'USER CREATE';
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  },
  login: async (request) => {
    try {
      const response = await fetch('http://localhost:8008/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      })
      const res = await response.json();
      if (response.ok === false) {
        throw res.message
      } else {
        cookies.set('access_token', res.access_token);
        cookies.set('refresh_token', res.refresh_token);
        return res.user
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  },
  authorization: async () => {
    try {
      const response = await fetch('http://localhost:8008/user/authorization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': cookies.get('access_token')
        },
        body: ''
      })
      const res = await response.json();
      if (response.ok === false) {
        throw res.message
      } else {
        return res.user
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  },
  updateToken: async () => {
    try {
      const response = await fetch('http://localhost:8008/user/updateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({refresh_token: cookies.get('refresh_token')})
      })
      const res = await response.json();
      if (response.ok === false) {
        cookies.remove('access_token');
        cookies.remove('refresh_token');
        throw res.message
      } else {
        cookies.set('access_token', res.access_token);
        cookies.set('refresh_token', res.refresh_token);
        return res.user
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  },
  forgotPassword: async (email) => {
    try {
      const response = await fetch('http://localhost:8008/user/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email})
      })
      const res = await response.json();
      if (response.ok === false) {
        throw res.message
      } else {
        cookies.set('action_tokin', res.token)
        return res
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  },
  changePassword: async (password) => {
    try {
      const response = await fetch('http://localhost:8008/user/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({password: password, token: cookies.get('action_token')})
      })
      const res = await response.json();
      if (response.ok === false) {
        throw res.message
      } else {
        return res
      }
    } catch (error) {
      console.error('hi-808: ', error);
      return error
    }
  }
};

export default API;
