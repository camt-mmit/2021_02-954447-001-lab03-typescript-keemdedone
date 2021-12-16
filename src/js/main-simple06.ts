import {createSectionInput} from './inputSection.js' ;
import * as ET from './elementType.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector<ET.Container>('.cmp-main-container');
    if(mainContainer){
    createSectionInput(mainContainer);
    }
});
