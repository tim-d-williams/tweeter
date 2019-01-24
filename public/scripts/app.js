/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //Attach timeago to DOM
  $("time.timeago").timeago();

  //get all of the tweet data from the server
  function loadTweets () {
    $.get('/tweets')
    .then (tweets => {
        renderTweets(tweets);
      });
    }
  loadTweets();

  //dynamically create each tweet article
  let createTweetElement = function(tweet) {
    var $tweet = $("<article>").addClass("tweet");

    //set all header elements to var
    let header = $('<header>')
      .append($('<img>')
        .attr('src', tweet.user.avatars.regular))
      .append($('<h3>').text(tweet.user.name))
      .append($('<h4>').text(tweet.user.handle));

    //set body elements
    let body = $("<div>").addClass("tweet-body")
      .append($("<p>").text(tweet.content.text));

    //set all footer elements to var
    let timeSince = $.timeago(tweet.created_at);
    let footer = $('<footer>')
      .append($("<p>").text(timeSince))
      .append($('<div>').addClass("icons")
        .append($('<img>')
          .attr('src', "images/baseline-flag-24px.svg"))
        .append($('<img>')
          .attr('src', "images/iconmonstr-retweet-1.svg"))
        .append($('<img>')
          .attr('src', "images/baseline-favorite-24px.svg")));

    //append all content to article for display
      $tweet.append($(header))
        .append($(body))
        .append($(footer));

        return $tweet;
  };

  //when tweet is submitted
    //prevent default posting to url
    //serialize the data to post
  //if there is an error displayed,
    //close the error and clear the html data then validate
  //if no error is displayed, validate
  $('#new-tweet').on('submit', function (event) {
    event.preventDefault();
    let tweetData = $(this).serialize();

    if ($('.error').is(':visible')) {
      ($('.error').slideToggle(200)
        .children().remove()
          .css( {display: 'none'} ));
      }

      if (!$.trim($(tweetData))) {
        const errorTooShort = $('.error').prepend($('<img>').attr('src', "images/error.png"))
          .append($("<p>").text('Your tweet is empty!'));

          $('.error').slideToggle(100, function() {
            $(this).append(errorTooShort);
          });
        }
        else if ($(tweetData).length > 140) {
          const errorTooLong = $('.error').prepend($('<img>').attr('src', "images/error.png"))
            .append($("<p>").text('Your tweet is too long!'));

            $('.error').slideToggle(100, function() {
              $(this).append(errorTooLong);
            });
        }
        else {
          postTweet(tweetData);
        }
  });

  //post date to server, clear text area and reset counter
  function postTweet(tweetData) {
    $.post('/tweets', tweetData).then (tweet => {
      $('.new-tweet textarea').val('');
      let counter = $('.new-tweet textarea').siblings('footer').children('.counter');
      $(counter).text('140');
      loadTweets(tweet);
    });
  }

  function renderTweets(tweets) {
    $('.tweet').remove();
    tweets.forEach(tweet => {
     let tweetData = createTweetElement(tweet);
     $('#tweet-container').prepend(tweetData);
    });
  }

  //compse button toggles new tweet section
  $( "#compose" ).click(function() {
    $( ".new-tweet" ).slideToggle(100, function() {
      $('textarea').focus();
      });
    });

});