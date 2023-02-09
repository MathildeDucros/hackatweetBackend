var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets')
const { checkBody } = require('../modules/checkBody');

router.post('/tweet', (req, res) => {
  if(!checkBody(req.body, ['content'])){
    res.json({ result: false, error: 'Missing or empty field' });
    return;
  }
  const tweetInc = req.body.content;
  const newTweet = new Tweet({
    content: tweetInc,
  })

  newTweet.save().then(() => {
    res.json({ result: true, tweet: newTweet.content})
  })
})


module.exports = router;