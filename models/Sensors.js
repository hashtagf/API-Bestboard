var mongoose = require('mongoose')
var Sensors = new mongoose.Schema({
  sensorId: { type: String, required: true },
  desired: { type: Object },
  status: { type: String, default: 'disabled' },
  timestamp: { type: Date, default: Date.now },
  name: { type: String },
  description: { type: String },
  language: { type: String, default: 'en-US' },
  sensorInfo: {
    type: { type: String },
    model: { type: String }
  },
  categories: { type: Array },
  location: {
    type: { type: String, default: 'Fixed' },
    address: { type: String },
    city: { type: String },
    county: { type: String },
    country: { type: String },
    postalCode: { type: String },
    freeText: { type: String },
    gps: {
      latitude: { type: Number },
      longitude: { type: Number }
    }
  },
  version: { type: String, default: '1.0' }
})

module.exports = mongoose.model('sensor', Sensors)
