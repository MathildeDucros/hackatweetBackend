var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets')
const { checkBody } = require('../modules/checkBody');

router.get('/gettweet', (req, res) => {
  Tweet.find().then(data => {
    res.json({data: data})
  })
});

router.post('/tweet', (req, res) => {
  if(!checkBody(req.body, ["content", "username", "firstname"])){
    res.json({ result: false, error: 'Missing or empty field' });
    return;
  }
  const newTweet = new Tweet({
    content: req.body.content,
    username: req.body.username,
    firstname: req.body.firstname
  })

  newTweet.save().then(() => {
    res.json({ result: true, content: newTweet.content, username: newTweet.username, firstname: newTweet.firstname})
  })
})

router.delete('/:tweetDelete', (req, res) => {
  Tweet.deleteOne({
    tweetDelete: { $regex: new RegExp(req.params.tweetDelete, "i") },
  }).then(data => {
    if (data) {
      res.json({ result: true, data: data });
    } else {
      res.json({ result: false, error: "tweet" });
    }
  })
})


module.exports = router;