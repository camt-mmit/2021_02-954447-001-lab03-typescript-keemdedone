import * as ET from './elementType.js';

function generateInputCotainer(parent:ET.Container): void{
  const inputContainers = parent.querySelectorAll<ET.Container>(' .cmp-inputs-container .cmp-input-container');
  inputContainers.forEach((inputContainer, i) => {
    const inputNum = inputContainer.querySelector<ET.Number>('.cmp-input-number');
    const removeInput = inputContainer.querySelector<ET.Command>('.cmd-remove-input');
    if(inputNum){
      inputNum.textContent = (i + 1).toString();
    }
    if (removeInput){
      removeInput.disabled = false;
    }
  });

  if(inputContainers.length == 1) {
    const removeInput = parent.querySelector<ET.Command>('.cmd-remove-input');
    if(removeInput){
      removeInput.disabled = true;
    }
  }
}

function calculateSum (parent: ET.Container): void{
  const inputs = parent.querySelectorAll<ET.Input>(' .cmp-inputs-container .cmp-input-container input[type="number"]');
  const outputResult = parent.querySelector<ET.Output>('output.cmp-result');
  let total = 0;
  inputs.forEach((elem) => total += elem.valueAsNumber);
  if(outputResult){
    outputResult.value = total.toString();
  }
}

function addInput(parent:ET.Container): void{
  const tmpInput = document.querySelector<ET.Template>('template#tmp-input');
  if(tmpInput){
    const fragment = tmpInput.content.cloneNode(true) as ET.TemplateContent;
    parent.append(fragment);
  }
  generateInputCotainer(parent);
}

//จำเป็นต้อง export มาด้วย
export function createInputSum(sectionContainer:ET.Container){
  const inputsContainer = sectionContainer.querySelector<ET.Container>('.cmp-inputs-container');

  sectionContainer.addEventListener('click', (ev) => {
      const elem = ev.target as ET.Command;

      if(elem.matches('.cmd-add-input')) {
        if(inputsContainer){
          addInput(inputsContainer);
        }
      } else if(elem.matches('.cmd-remove-input')) {
          const inputContainer = elem.closest<ET.Container>('.cmp-input-container');
          if(inputContainer){
          inputContainer.remove();
          }
          generateInputCotainer(sectionContainer);
          calculateSum(sectionContainer);
      }
  });
  if(inputsContainer){
    inputsContainer.addEventListener('change', (ev) => {
        const elem = ev.target as ET.Command;
        if(elem.matches('input[type="number"]')) {
            calculateSum(sectionContainer);
        }
    });
    addInput(inputsContainer);
    }
  }

  //test to git
