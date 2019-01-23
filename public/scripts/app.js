/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


let createTweetElement = function(tweet) {
  let $tweet = $("<article>").addClass("tweet")

  let header = $('<header>')
    .append($('<img>')
      .attr('src', tweet.user.avatars.regular))
    .append($('<h3>').text(tweet.user.name))
    .append($('<h4>').text(tweet.user.handle))

  let body = $("<div>").addClass("tweet-body")
    .append($("<p>").text(tweet.content.text))

  let footer = $('<footer>')
    .append($("<p>").text(Date.now() - tweet.created_at))
    .append($('<div>').addClass("icons")
      .append($('<img>')
        .attr('src', "images/baseline-flag-24px.svg"))
      .append($('<img>')
        .attr('src', "images/iconmonstr-retweet-1.svg"))
      .append($('<img>')
        .attr('src', "images/baseline-favorite-24px.svg")))

    $tweet.append($(header))
      .append($(body))
      .append($(footer))

      return $tweet
}

$(document).ready(function() {

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})