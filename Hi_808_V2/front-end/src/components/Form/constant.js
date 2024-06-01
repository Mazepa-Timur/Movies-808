export default undefined
export const RegExpEmail = new RegExp('[a-zA-Z0-9]@.');
export const RegExpGmail = new RegExp(/^[A-Z0-9._%+-]+@gmail.com$/i)
export const RegExpPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");