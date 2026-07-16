/* set up and mount the results from the APi */

import { meaningsComponent, resultComponent } from "./resultComponent";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default async function showResult(word) {
  /* get the div for result display */
  const resultSection = document.querySelector(".result-section");
  const resultArea = document.querySelector(".result-area");
  //clear previous search
  resultArea.innerHTML = "";

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
    //attach meanings
    showMeanings(data);

    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

function showMeanings(results) {
  results.forEach((result, index) => {
    //get meanings div if mounted
    const meaningsDiv = document.querySelector(`.meanings-${index}`);

    const meaningsHtml = result.meanings
      .map((meaning) => meaningsComponent(meaning))
      .join("");

    meaningsDiv.innerHTML = meaningsHtml;
  });
}
