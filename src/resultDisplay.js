/* set up and mount the results from the APi */

import {
  definitionsComponent,
  errorComponent,
  loadingIndicator,
  meaningsComponent,
  phoeneticsComponent,
  resultComponent,
} from "./resultComponent";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default async function showResult(word) {
  /* get the div for result display */
  const resultSection = document.querySelector(".result-section");
  const resultArea = document.querySelector(".result-area");
  //clear previous search
  resultArea.innerHTML = "";

  //diaplay loading indicator when waiting for response
  resultArea.innerHTML = loadingIndicator();

  /* Retrieve definition from api and display result or error */
  try {
    //throw error if word is number or empty
    if (!word || /^[+-]?\d+(\.\d+)?$/.test(word)) {
      throw new Error(`Sorry buddy we didn't quite get that.`);
    }
    //append word to url
    const url = URL + word;

    //perform network calls
    const response = await fetch(url);
    const data = await response.json();

    //Display data to Dom
    const resultsHtml = data
      .map((result, index) => resultComponent(result, index))
      .join("");
    resultArea.innerHTML = resultsHtml;

    //attach phonetics
    showPhonetics(data);
    //attach meanings
    showMeanings(data);
  } catch (e) {
    //display error div when failure occurs
    resultArea.innerHTML = errorComponent();
  }
}

/* functiont to display the phonetics and attach event listeners to play audio */
function showPhonetics(results) {
  results.forEach((result, index) => {
    const phoneticsDiv = document.querySelector(`.phonetics-${index}`);
    const phoneHTML = result.phonetics
      .map((phon, index) => phoeneticsComponent(phon, index))
      .join("");

    phoneticsDiv.innerHTML = phoneHTML;

    //attach audio player to buttons
    playAudio(result.phonetics, `phonetics-${index}`);
  });

  function playAudio(phonetics, selector) {
    phonetics.forEach((phon, index) => {
      const phonPlayer = document.querySelector(
        `.${selector} #phonetics-${index}`,
      );

      //if audio url unavailable disable button and change icon
      if (!phonPlayer.dataset.audio) {
        phonPlayer.innerHTML = '<i class="bi bi-volume-mute text-xl"></i>';
        phonPlayer.disabled = true;
      }

      //add click event to all phonetic instances
      phonPlayer.addEventListener("click", (e) => {
        const audioUrl = e.currentTarget.dataset.audio;

        const audio = new Audio(audioUrl);

        audio.play();
      });
    });
  }
}

/* function to display the individual meanings of each word */
function showMeanings(results) {
  results.forEach((result, index) => {
    const meaningsDiv = document.querySelector(`.meanings-${index}`);
    //get meanings div if mounted
    const meaningsHtml = result.meanings
      .map((meaning, index) => meaningsComponent(meaning, index))
      .join("");

    meaningsDiv.innerHTML = meaningsHtml;
    //show definitions
    showDefinitions(result.meanings, `meanings-${index}`);
  });

  /* function to display the definitions of each meaning */
  function showDefinitions(meanings, selector) {
    meanings.forEach((meaning, index) => {
      //get definitions div (takes the specifica selector class from the meaning div to chain with the definitions class)
      const definitionsDiv = document.querySelector(
        `.${selector} .definitions-${index}`,
      );

      const definitionsHtml = meaning.definitions
        .map((defin) => definitionsComponent(defin))
        .join("");

      definitionsDiv.innerHTML = definitionsHtml;
    });
  }
}
