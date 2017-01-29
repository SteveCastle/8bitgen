var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gridSchema = new Schema({
  title:  String,
  userId: String,
  frames:   [[{ color: String}]],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  private: Boolean,
  height: Number,
  width: Number,
  likes:  Number
});

export default mongoose.model('Grid', gridSchema);