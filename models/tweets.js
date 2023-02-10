const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  content: String,
  username: String,
  firstname: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports =Tweet