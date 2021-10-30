document.addEventListener('DOMContentLoaded', () => {
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const buttons = document.querySelectorAll('span.like-glyph')
console.log(buttons)

buttons.forEach(buttons => buttons.addEventListener('click', clickLike))

function clickLike(buttons){
  console.log(buttons.target)
  mimicServerCall()
  .then(() => {
    if (buttons.target.innerTEXT === EMPTY_HEART) {
      buttons.target.innerTEXT = FULL_HEART
    }
    else if (buttons.target.innerTEXT === FULL_HEART) {
      buttons.target.innerTEXT = EMPTY_HEART
    }
  })
  .catch(() => {
    const erMsg = document.getElementById('modal')
    console.log(erMsg)
    erMsg.className = 'show'

  setTimeout(() => {
    const erMsg = document.getElementById("modal")
    console.log(erMsg)
    erMsg.className = "hidden"}, 3000)}
  )}
  })

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
