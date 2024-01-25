// phew… not a lot going on here. Please add some code!

//Bookmark-Button///

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarkActive");
});

//Answer-Button///

const answerButton = document.querySelector('[data-js="answerButton"]');
const answerElement = document.querySelector('[data-js="answerElement"]');

/* console.log(answerButton);
console.log(answerElement); */

answerButton.addEventListener("click", () => {
  answerElement.classList.toggle("hidden");
  changeButtonText();
});

//Text auf Answer-Button ändern//

const buttonText = document.querySelector('[data-js="answerButton"]');

/* console.log(answerElement.classList.contains("hidden")); */
/* console.log(answerElement.classList.contains("hidden")); */

function changeButtonText() {
  if (answerElement.classList.contains("hidden")) {
    buttonText.innerHTML = "Show Answer";
  } else {
    buttonText.innerHTML = "Hide Answer";
  }
}

/* function changeButtonText wurde oben in den EventListener 
für den Answer-Button eingefügt. Ausführung bei click!*/

/* TEST TEST TEST -------------------------
function changeButtonText() {
  if (answerElement.classList.contains("hidden")) {
    console.log("Yeahhhhh");
  } else {
    console.log("Noooooooo");
  }
} --------------------------------------*/
