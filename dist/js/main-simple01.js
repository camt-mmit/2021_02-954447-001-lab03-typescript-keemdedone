"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');
    inputs.forEach((elem) => {
        elem.addEventListener('change', () => {
            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            const outputElem = document.querySelector('output.cmp-result');
            if (outputElem) {
                outputElem.value = total.toString();
            }
        });
    });
});
/*
<- STEP ->
cmd
yarn build
npx http-server ./dsit
<- END STEP ->
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zaW1wbGUwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9tYWluLXNpbXBsZTAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsR0FBRSxFQUFFO0lBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBbUIsNENBQTRDLENBQUMsQ0FBQztJQUN6RyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xGLElBQUcsVUFBVSxFQUFDO2dCQUNaLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7OztFQU1FIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKCk9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PignLmNtcC1pbnB1dHMtY29udGFpbmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKChlbGVtKSA9PiB0b3RhbCArPSBlbGVtLnZhbHVlQXNOdW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KCdvdXRwdXQuY21wLXJlc3VsdCcpO1xuICAgICAgICAgICAgaWYob3V0cHV0RWxlbSl7XG4gICAgICAgICAgICAgIG91dHB1dEVsZW0udmFsdWUgPSB0b3RhbC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vKlxuPC0gU1RFUCAtPlxuY21kXG55YXJuIGJ1aWxkXG5ucHggaHR0cC1zZXJ2ZXIgLi9kc2l0XG48LSBFTkQgU1RFUCAtPlxuKi9cbiJdfQ==