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
});
