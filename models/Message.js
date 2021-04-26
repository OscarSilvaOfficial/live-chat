import mongoose from '../repository/mongo.js'

const Message = mongoose.model('Message', {
  name: String,
  message: String 
});

export default Message