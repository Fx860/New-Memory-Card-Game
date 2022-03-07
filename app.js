 const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBorad = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBorad) return; 
  if (this === firstCard) return;

  this.classList.add('flip');
 
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

   // second click 
    secondCard = this; 

  checkForMatch();  
}
   

function checkForMatch() {
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards();
}


function disableCards () {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBorad = true;


setTimeout(() => { 
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');

  resetBoard(); 
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBorad = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let randompos = Math.floor(Math.random() * 20);
    card.style.order = randompos;
});
})();

cards.forEach(card => card.addEventListener('click', flipCard));
