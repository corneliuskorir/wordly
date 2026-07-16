/* Make sure dom content is available */
document.addEventListener("DOMContentLoaded", () => {
  mountItems();
});

/* Function to set up dom objects */

function mountItems() {
  /* retrieve form data for word look up */
  const form = document.querySelector(".search-form");
  //add event listener to form
  form.addEventListener("submit", (event) => {
    //prevent default action
    event.preventDefault();
    /* Retrieve word from form data */
    const formEvent = event.target;
    const formData = new FormData(formEvent);
    const word = Object.fromEntries(formData)["word"];
    //log for test
    console.log(word);
  });
}
