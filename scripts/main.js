'use strict';

console.log("LOADED");
// Shortcuts to DOM Elements.
var messageForm = document.getElementById('contactForm');
var name = document.getElementById("person");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var desc = document.getElementById("desc");


/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function writeNewPost(name, email, subject, desc, date) {
  // A post entry.
  var postData = {
    name: name,
    email: email,
    subject: subject,
    desc: desc,
    date: date,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('entries').push().key;

  var updates = {};
  updates['/posts/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

/**
 * Creates a new post for the current user.
 */
function newPostForCurrentUser(nameF, emailF, subjectF, descF, date) {
  return firebase.database().ref().once('value').then(function(snapshot) {
    return writeNewPost(nameF, emailF, subjectF, descF, date);
  });
}

function emailPostRequest(nameF, emailF, subjectF, descF) {
  var req = new XMLHttpRequest();
  var url = "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbySQ_bAV6reSUpzLj3VAtE5l1V4MIhfoojeXHAjnyCzB2HvYA/exec";
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/JSON");
  req.setRequestHeader("Access-Control-Allow-Origin", "*");
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      var json = req.response;
      console.log(json);
    }
  }
  var post = JSON.stringify({name : nameF, email : emailF, subject : subjectF, desc : descF});
  req.send(post);
}

// Bindings on load.
window.addEventListener('load', function() {
  // Saves message on form submit.
  messageForm.onsubmit = function(e) {
    e.preventDefault();
    var nameF = document.getElementById("person").value;
    var emailF = email.value;
    var subjectF = subject.value;
    var descF = desc.value;
    console.log("NAME: " + nameF + "\nEMAIL: " + emailF + "\nSUBJECT: " + subjectF + "\nBODY: " + descF);
    if (nameF && emailF && subjectF && descF) {
      var date = new Date();
      newPostForCurrentUser(nameF, emailF, subjectF, descF, date.toString());
      // emailPostRequest(nameF, emailF, subjectF, descF);
      document.getElementById("person").value = '';
      email.value = '';
      subject.value = '';
      desc.value = '';
    }
  };
}, false);
