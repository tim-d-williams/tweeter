/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function loadTweets () {
    $.get('/tweets')
    .then (tweets => {
        renderTweets(tweets)
      })
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
      .append($("<p>").text(Date.now() - tweet.created_at))
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

        return $tweet
  }

  $('#new-tweet').on('submit', function (event) {
    event.preventDefault();
    let tweetData = $(this).serialize()

    postTweet(tweetData);
    })

  function postTweet(tweetData) {
    // let errorTooLong = ($('.error').prepend($('<img>').attr('src', "images/error.png"))
    //   .append($("<p>").text('Your tweet is too long!')))
    // let errorTooShort = ($('.error').prepend($('<img>').attr('src', "images/error.png"))
    // .append($("<p>").text('Your tweet is empty!')))

    // if ($('textarea').val().length > 140) {
    //   $('.error').slideToggle(100, function() {
    //    $(this).append(errorTooLong)
    //    })
    //   }
    // else if
    //    ($('textarea').val() === "" || null) {
    //     $('.error').slideToggle(100, function() {
    //       $(this).append(errorTooShort)
    //       })
    // } else {
        $.post('/tweets', tweetData).then (tweet => {
        loadTweets(tweet)
    //   })
    })
  }

  function renderTweets(tweets) {
    $('.tweet').remove()
    tweets.forEach(tweet => {
     let tweetData = createTweetElement(tweet);
     $('#tweet-container').prepend(tweetData)
    });
  }

loadTweets();

$( "#compose" ).click(function() {
  $( ".new-tweet" ).slideToggle(100, function() {
    $('textarea').focus()
    })
  })


})