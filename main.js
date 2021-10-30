// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function clickLike() {
    document.addEventListener('DOMContentLoaded', () => {
    //const likeBtn = document.getElementsByClassName('like-glyph');
    EMPTY_HEART.addEventListener('click', console.log(mimicServerCall))
  })
}

/*function eventClick(click) {
  fetch('http://mimicServer.example.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(click)
  })
  .then(res => res.json())
  .then(click => likerBtn(click))
}*/




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
