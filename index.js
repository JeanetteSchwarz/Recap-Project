// phew… not a lot going on here. Please add some code!

//Bookmark-Button///

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarkActive");
});
