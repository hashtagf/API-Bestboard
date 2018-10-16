var mongoose = require('mongoose')
var Machine = new mongoose.Schema({
  boardId: { type: String, required: true },
  indexMuuri: { type: String, default: 9999},
  widget: {type: Object, max: 0}
})

module.exports = mongoose.model('widget', Machine)