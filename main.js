import showResult from "./src/resultDisplay";

/* Make sure dom content is available */
document.addEventListener("DOMContentLoaded", () => {
  setTheme();
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

    /* Send word to api for search */
    showResult(word);

    /* clear form */
    event.target.reset();
  });
}

function setTheme() {
  //get the theme toggle button
  const toggle = document.getElementById("theme-toggle");

  /* check current user theme and set toggle to reflect mode */
  if (!(localStorage.theme === "light")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggle.checked = true;
      localStorage.theme = "dark";
    }
  }
  /* Check theme selected in storage or set it to user preference on page load */
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  /* use toggle button to change the preference in storage and change page theme */
  toggle.addEventListener("change", (event) => {
    if (event.target.checked) {
      localStorage.theme = "dark";
      document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
    }
  });
}
