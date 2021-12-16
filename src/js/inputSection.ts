import {createInputSum} from './inputSum.js';
import * as ET from './elementType.js';

function generateSectionCotainer(parent: ET.Container): void{
    const sectionContainers = parent.querySelectorAll('.cmp-sections-container .cmp-section-container');
    sectionContainers.forEach((sectionContainer, i) => {
      const sectionNumber = sectionContainer.querySelector<ET.Number>('.cmp-sec-no');
      const removeSection = sectionContainer.querySelector<ET.Command>('.cmd-remove-sec');
      if(sectionNumber){
        sectionNumber.textContent = (i + 1).toString();
      }
      if(removeSection){
        removeSection.disabled = false;
      }
    });

    if(sectionContainers.length == 1) {
      const removeSection = parent.querySelector<ET.Command>('.cmd-remove-sec');
      if(removeSection){
        removeSection.disabled = true;
      }
  }
}

function addSection(parent: ET.Container): void{
    const tmpSection = document.querySelector<ET.Template>('template#tmp-section');
    if (tmpSection){
    const fragment = tmpSection.content.cloneNode(true) as ET.TemplateContent;
    const CreateSum = fragment.querySelector<ET.Container>('.cmp-section-container');
    if(CreateSum){
    createInputSum(CreateSum);
    }
    parent.append(fragment);
    }
    generateSectionCotainer(parent);
}

export function createSectionInput(mainContainer: ET.Container) {
    const sectionContainer = mainContainer.querySelector<ET.Container>('.cmp-sections-container'); //เรียกใช้กล่อง section

    mainContainer.addEventListener('click', (ev) => {
        const elem = ev.target as ET.Command;

        if(elem.matches('.cmd-add-section')) {
          if(sectionContainer){
            addSection(sectionContainer);
            }
          } else if(elem.matches('.cmd-remove-sec')) {
            const elem = ev.target as ET.Command;
            const inputSection = elem.closest<ET.Container>('.cmp-section-container');
            if(inputSection){
            inputSection.remove();
            }
            generateSectionCotainer(mainContainer);
          }
        }); // กล่อง section แรกที่ปรากฎและไม่สามารถถูกลบจากเงื่อนไขด้านบน
      if(sectionContainer){
        addSection(sectionContainer);
      }
  }
