export function resultComponent(result) {
  return `<div
          class=""
        >
          <div
            id="searched-word"
            class="relative font-search-word text-5xl before:absolute before:top-13 before:left-0 before:w-30 before:h-1 before:bg-border"
          >
            Plant
          </div>

          <div class="phonetics flex w-full gap-3 mt-5 italic">
            <div class="flex gap-2 items-center">
              <i class="bi bi-volume-up"></i>
              <span>/plænt/</span>
            </div>
            <div class="flex gap-2 items-center">
              <i class="bi bi-volume-up"></i>
              <span>/plænt/</span>
            </div>
            <div class="flex gap-2 items-center">
              <i class="bi bi-volume-up"></i>
              <span>/plænt/</span>
            </div>
          </div>

          <div class="meanings w-full flex flex-col gap-5 px-5 mt-5">
            <div class="parts-of-speech flex flex-col">
              <div class="part-of-speech italic font-bold">noun</div>
              <div class="definitions pl-5">
                <ul class="list-decimal flex flex-col gap-4">
                  <li>
                    <div class="definition">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati, saepe sint culpa vitae placeat reprehenderit
                      odio exercitationem voluptates natus dolore!
                    </div>
                    <div class="example pl-2 italic text-border">
                      <p class="text-header-text">example</p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, delectus.
                    </div>
                    <div class="synonyms text-sm">
                      <p class="italic text-header-text">synonyms</p>
                      <ul class="flex gap-2">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                    <div class="antonyms text-sm">
                      <p class="italic text-header-text">antonyms</p>
                      <ul class="flex gap-1">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="definition">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati, saepe sint culpa vitae placeat reprehenderit
                      odio exercitationem voluptates natus dolore!
                    </div>
                    <div class="example pl-2 italic text-border">
                      <p class="text-header-text">example</p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, delectus.
                    </div>
                    <div class="synonyms text-sm">
                      <p class="italic text-header-text">synonyms</p>
                      <ul class="flex gap-2">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                    <div class="antonyms text-sm">
                      <p class="italic text-header-text">antonyms</p>
                      <ul class="flex gap-1">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="definition">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati, saepe sint culpa vitae placeat reprehenderit
                      odio exercitationem voluptates natus dolore!
                    </div>
                    <div class="example pl-2 italic text-border">
                      <p class="text-header-text">example</p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, delectus.
                    </div>
                    <div class="synonyms text-sm">
                      <p class="italic text-header-text">synonyms</p>
                      <ul class="flex gap-2">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                    <div class="antonyms text-sm">
                      <p class="italic text-header-text">antonyms</p>
                      <ul class="flex gap-1">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="synonyms text-sm">
                <p class="italic text-header-text">synonyms</p>
                <ul class="flex gap-2">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
              <div class="antonyms text-sm">
                <p class="italic text-header-text">antonyms</p>
                <ul class="flex gap-1">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
}
