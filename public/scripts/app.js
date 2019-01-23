/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
function renderTweets(tweets) {
  tweets.forEach(tweet => {
    createTweetElement(tweet)
  });
}

let createTweetElement = function(tweet) {
  var $tweet = $("<article>").addClass("tweet")

  //set all header elements to var
  let header = $('<header>')
    .append($('<img>')
      .attr('src', tweet.user.avatars.regular))
    .append($('<h3>').text(tweet.user.name))
    .append($('<h4>').text(tweet.user.handle))

    //set body elements
  let body = $("<div>").addClass("tweet-body")
    .append($("<p>").text(tweet.content.text))

    //set all footer elements to var
  let footer = $('<footer>')
    .append($("<p>").text(new Date() - tweet.created_at))
    .append($('<div>').addClass("icons")
      .append($('<img>')
        .attr('src', "images/baseline-flag-24px.svg"))
      .append($('<img>')
        .attr('src', "images/iconmonstr-retweet-1.svg"))
      .append($('<img>')
        .attr('src', "images/baseline-favorite-24px.svg")))

   //append all content to article for display
    $tweet.append($(header))
      .append($(body))
      .append($(footer))

      $('#tweet-container').append($tweet)
      return $tweet
}

renderTweets(data);

})