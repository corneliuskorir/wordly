export function resultComponent(result) {
  return `
<div class="">
  <div id="searched-word" class="relative font-search-word text-5xl before:absolute before:top-13 before:left-0 before:w-30 before:h-1 before:bg-border">
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

  <div class="meanings w-full flex flex-col gap-5 px-5 mt-5">

  </div>
  
</div>
`;
}

function meaningsComponent(meaning) {
  return `<div class="parts-of-speech flex flex-col">
      <div class="part-of-speech italic font-bold">${meaning.partOfSpeech}</div>
      <div class="definitions pl-5">
        <ul class="list-decimal flex flex-col gap-4">
        </ul>
      </div>
      <div class="synonyms text-sm">
        <p class="italic text-header-text">synonyms</p>
        <ul class="flex gap-2">
        ${meaning.synonyms.map((sy) => `<li>${sy}</li>`).join("")}
        </ul>
      </div>
      <div class="antonyms text-sm">
        <p class="italic text-header-text">antonyms</p>
        <ul class="flex gap-1">
        ${meaning.antonyms.map((ant) => `<li>${ant}</li>`).join("")}
       </ul>
      </div>
    </div>`;
}

function definitionsComponent(definition) {
  return `<li>
            <div class="definition">
              ${definition.definition}
            </div>
            <div class="example pl-2 italic text-border">
              <p class="text-header-text">example</p>
              ${!definition.example ? definition.example : ""}
            </div>
            <div class="synonyms text-sm">
              <p class="italic text-header-text">synonyms</p>
              <ul class="flex gap-2">
                ${definition.synonyms.map((sy) => `<li>${sy}</li>`).join("")}
              </ul>
            </div>
            <div class="antonyms text-sm">
              <p class="italic text-header-text">antonyms</p>
              <ul class="flex gap-2">
                 ${definition.antonyms.map((ant) => `<li>${ant}</li>`).join("")}
              </ul>
            </div>
          </li>`;
}
