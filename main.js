//document.addEventListener('DOMContentLoaded', () => {
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const buttons = document.querySelectorAll('.like-glyph')
console.log(buttons)

function clickLike(e){
  const heart = e.target
  console.log(heart)
  mimicServerCall('fgjbgrrger')
  .then(() => {
    //console.log('first condition', heart.innerTEXT === EMPTY_HEART)
    //console.log(heart.innerTEXT, EMPTY_HEART)
    console.log(heart)
    console.log(heart.innerTEXT)
    if (heart.innerTEXT === EMPTY_HEART) {
      console.log('was empty', heart.innerTEXT)
      heart.innerTEXT = FULL_HEART
      heart.className = 'activated-heart'
    } else {
      console.log('was full', heart.innerTEXT)
      heart.innerTEXT = EMPTY_HEART
      heart.className = ''
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

  buttons.forEach(button => {
    console.log(button)
    button.addEventListener('click', clickLike)
  })
  //})

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
