const {Schema, model} = require('mongoose');

const setting = new Schema({
    color: {type: String},
    theme: {type: String}
});

const friends = new Schema({
    friendId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const user_schema = new Schema({
    logo: {type: String, default: ''},
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    roles: [{type: String, default: 'user'}],
    setting: {type: setting, default: {color: '#ff0000', theme: 'darkTheme'}},
    friends: {type: friends}
});


module.exports = model('User', user_schema);