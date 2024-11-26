const {model} = require('mongoose')
const {PersonSchema} = require('../schemas/PersonSchema');

const PersonModel = new model('person',PersonSchema);

module.exports = {PersonModel};