/* Error gifs array */
const errorGif = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ghuvaCOI6GOoTX0RmH/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bm02BE6DQ4Oag8GXep/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VeB9ieebylsaN5Jw8p/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DvyLQztQwmyAM/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d2xlaGFxeDZjandmdDcwMmcydTlnc3lrNWQzZ3NtNW9qZ2ZxczkzZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ybcMkow8xLIrK/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/a0FuPjiLZev4c/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/glmRyiSI3v5E4/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8b9Xax6L7qtAkAimGm/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ5Y2FvNzN2dGJxcjI5cTNybjgza3pzY3V1ZWJ0a2d0aHE5Z2dqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2K5jinAlChoCLS/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d3l0ZDE5cWY1ZjU3bGdpczI4ODlvOXZxbWFqMDIzd296ZmZkeG15NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGPTxLislwm3u/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3o3bWlyem9ydmp3ZmdjZ3cyODMxY2IxNnpjenVxN3loam53dnlrbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aTskHEUdgCQAXde/giphy.gif",
];

/* display individual results */
export function resultComponent(result, index) {
  return `
<div class="">
  <div id="searched-word" class="relative font-search-word text-4xl before:absolute before:top-11 before:left-0 before:w-30 before:h-1 before:bg-border">
    ${result.word}
  </div>

  <div class="phonetics flex w-full gap-3 mt-5 italic">
    ${result.phonetics
      .map(
        (phon) => `
    <div class="flex gap-2 items-center">
      <i class="bi bi-volume-up"></i>
      <span>${phon.text}</span>
    </div>
    `,
      )
      .join("")}
  </div>

  <div class="meanings-${index} w-full flex flex-col gap-5 px-5 mt-5">

  </div>

</div>
`;
}

/* display individual meanings */
export function meaningsComponent(meaning, index) {
  return `<div class="parts-of-speech flex flex-col">
      <div class="part-of-speech italic font-bold">${meaning.partOfSpeech}</div>
      <div class="pl-5 pb-5 text-lg">
        <ul class="definitions-${index} list-decimal flex flex-col gap-4">
        </ul>
      </div>
                    ${
                      !(meaning.synonyms.length === 0)
                        ? `
                  <div class="synonyms text-sm">
              <p class="italic text-header-text">synonyms</p>
              <ul class="flex flex-wrap gap-2">
                ${meaning.synonyms.map((sy) => `<li>${sy}</li>`).join("")}
              </ul>
            
            </div>`
                        : ""
                    }
              ${
                !(meaning.antonyms.length === 0)
                  ? `
                  <div class="antonyms text-sm">
              <p class="italic text-header-text">antonyms</p>
              <ul class="flex flex-wrap gap-2">
                 ${meaning.antonyms.map((ant) => `<li>${ant}</li>`).join("")}
              </ul>
            </div>`
                  : ""
              }
    </div>`;
}

/* display definitions */
export function definitionsComponent(definition) {
  return `<li>
            <div class="definition">
              ${definition.definition}
            </div>
            ${
              definition.example
                ? `<div class="example pl-2 italic text-border">
              <p class="text-header-text text-sm">example</p>
              ${definition.example ? `<p class="text-base">${definition.example}</p>` : ""}
            </div>`
                : ""
            }
            
              ${
                !(definition.synonyms.length === 0)
                  ? `
                  <div class="synonyms text-sm">
              <p class="italic text-header-text">synonyms</p>
              <ul class="flex flex-wrap gap-2">
                ${definition.synonyms.map((sy) => `<li>${sy}</li>`).join("")}
              </ul>
            
            </div>`
                  : ""
              }
              ${
                !(definition.antonyms.length === 0)
                  ? `
                  <div class="antonyms text-sm">
              <p class="italic text-header-text">antonyms</p>
              <ul class="flex flex-wrap gap-2">
                 ${definition.antonyms.map((ant) => `<li>${ant}</li>`).join("")}
              </ul>
            </div>`
                  : ""
              }
            
          </li>`;
}

/* display errror message and image */
export function errorComponent() {
  /* select random gif to retrn to user when theres an error */
  const random = Math.floor(Math.random() * errorGif.length);
  const src = errorGif[random];
  return `<div class="flex flex-col items-center gap-3 ">
            <p class="text-lg text-error">Sorry bud! Something's wrong.</p>
            <div class="w-full max-w-3/4 overflow-hidden rounded-lg">
              <img
                class="w-full h-full object-fill"
                src=${src}
                alt=""
              />
            </div>
          </div>`;
}

/* display laoding indicator when inbetween fetching and displaying state */
export function loadingIndicator() {
  return `<div class="flex w-full justify-center">
            <div class="w-30 h-30 overflow-hidden">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NnNmYWtqYXQ5dmVwbjltMDBhOXZnMnJoeTV4c3V2cTg4MHhwcHI2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XPm6fbe5jGveNlHwuU/giphy.gif"
                alt=""
              />
            </div>
          </div>`;
}
