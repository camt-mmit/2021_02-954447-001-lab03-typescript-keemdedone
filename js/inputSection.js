import { createInputSum } from './inputSum.js';
function generateSectionCotainer(parent) {
    const sectionContainers = parent.querySelectorAll('.cmp-sections-container .cmp-section-container');
    sectionContainers.forEach((sectionContainer, i) => {
        const sectionNumber = sectionContainer.querySelector('.cmp-sec-no');
        const removeSection = sectionContainer.querySelector('.cmd-remove-sec');
        if (sectionNumber) {
            sectionNumber.textContent = (i + 1).toString();
        }
        if (removeSection) {
            removeSection.disabled = false;
        }
    });
    if (sectionContainers.length == 1) {
        const removeSection = parent.querySelector('.cmd-remove-sec');
        if (removeSection) {
            removeSection.disabled = true;
        }
    }
}
function addSection(parent) {
    const tmpSection = document.querySelector('template#tmp-section');
    if (tmpSection) {
        const fragment = tmpSection.content.cloneNode(true);
        const CreateSum = fragment.querySelector('.cmp-section-container');
        if (CreateSum) {
            createInputSum(CreateSum);
        }
        parent.append(fragment);
    }
    generateSectionCotainer(parent);
}
export function createSectionInput(mainContainer) {
    const sectionContainer = mainContainer.querySelector('.cmp-sections-container'); //เรียกใช้กล่อง section
    mainContainer.addEventListener('click', (ev) => {
        const elem = ev.target;
        if (elem.matches('.cmd-add-section')) {
            if (sectionContainer) {
                addSection(sectionContainer);
            }
        }
        else if (elem.matches('.cmd-remove-sec')) {
            const elem = ev.target;
            const inputSection = elem.closest('.cmp-section-container');
            if (inputSection) {
                inputSection.remove();
            }
            generateSectionCotainer(mainContainer);
        }
    }); // กล่อง section แรกที่ปรากฎและไม่สามารถถูกลบจากเงื่อนไขด้านบน
    if (sectionContainer) {
        addSection(sectionContainer);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzL2lucHV0U2VjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzdDLFNBQVMsdUJBQXVCLENBQUMsTUFBb0I7SUFDakQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNwRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQVksYUFBYSxDQUFDLENBQUM7UUFDL0UsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFhLGlCQUFpQixDQUFDLENBQUM7UUFDcEYsSUFBRyxhQUFhLEVBQUM7WUFDZixhQUFhLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsSUFBRyxhQUFhLEVBQUM7WUFDZixhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBRyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQWEsaUJBQWlCLENBQUMsQ0FBQztRQUMxRSxJQUFHLGFBQWEsRUFBQztZQUNmLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0tBQ0o7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsTUFBb0I7SUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9FLElBQUksVUFBVSxFQUFDO1FBQ2YsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUF1QixDQUFDO1FBQzFFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWUsd0JBQXdCLENBQUMsQ0FBQztRQUNqRixJQUFHLFNBQVMsRUFBQztZQUNiLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdkI7SUFDRCx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLGFBQTJCO0lBQzFELE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBZSx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO0lBRXRILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUMzQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsTUFBb0IsQ0FBQztRQUVyQyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuQyxJQUFHLGdCQUFnQixFQUFDO2dCQUNsQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUM1QjtTQUNGO2FBQU0sSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDekMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQW9CLENBQUM7WUFDckMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBZSx3QkFBd0IsQ0FBQyxDQUFDO1lBQzFFLElBQUcsWUFBWSxFQUFDO2dCQUNoQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckI7WUFDRCx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsOERBQThEO0lBQ3BFLElBQUcsZ0JBQWdCLEVBQUM7UUFDbEIsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVJbnB1dFN1bX0gZnJvbSAnLi9pbnB1dFN1bS5qcyc7XG5pbXBvcnQgKiBhcyBFVCBmcm9tICcuL2VsZW1lbnRUeXBlLmpzJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVTZWN0aW9uQ290YWluZXIocGFyZW50OiBFVC5Db250YWluZXIpOiB2b2lke1xuICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXJzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbXAtc2VjdGlvbnMtY29udGFpbmVyIC5jbXAtc2VjdGlvbi1jb250YWluZXInKTtcbiAgICBzZWN0aW9uQ29udGFpbmVycy5mb3JFYWNoKChzZWN0aW9uQ29udGFpbmVyLCBpKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uTnVtYmVyID0gc2VjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEVULk51bWJlcj4oJy5jbXAtc2VjLW5vJyk7XG4gICAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gc2VjdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEVULkNvbW1hbmQ+KCcuY21kLXJlbW92ZS1zZWMnKTtcbiAgICAgIGlmKHNlY3Rpb25OdW1iZXIpe1xuICAgICAgICBzZWN0aW9uTnVtYmVyLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgaWYocmVtb3ZlU2VjdGlvbil7XG4gICAgICAgIHJlbW92ZVNlY3Rpb24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHNlY3Rpb25Db250YWluZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3I8RVQuQ29tbWFuZD4oJy5jbWQtcmVtb3ZlLXNlYycpO1xuICAgICAgaWYocmVtb3ZlU2VjdGlvbil7XG4gICAgICAgIHJlbW92ZVNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNlY3Rpb24ocGFyZW50OiBFVC5Db250YWluZXIpOiB2b2lke1xuICAgIGNvbnN0IHRtcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEVULlRlbXBsYXRlPigndGVtcGxhdGUjdG1wLXNlY3Rpb24nKTtcbiAgICBpZiAodG1wU2VjdGlvbil7XG4gICAgY29uc3QgZnJhZ21lbnQgPSB0bXBTZWN0aW9uLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVULlRlbXBsYXRlQ29udGVudDtcbiAgICBjb25zdCBDcmVhdGVTdW0gPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yPEVULkNvbnRhaW5lcj4oJy5jbXAtc2VjdGlvbi1jb250YWluZXInKTtcbiAgICBpZihDcmVhdGVTdW0pe1xuICAgIGNyZWF0ZUlucHV0U3VtKENyZWF0ZVN1bSk7XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmQoZnJhZ21lbnQpO1xuICAgIH1cbiAgICBnZW5lcmF0ZVNlY3Rpb25Db3RhaW5lcihwYXJlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbklucHV0KG1haW5Db250YWluZXI6IEVULkNvbnRhaW5lcikge1xuICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8RVQuQ29udGFpbmVyPignLmNtcC1zZWN0aW9ucy1jb250YWluZXInKTsgLy/guYDguKPguLXguKLguIHguYPguIrguYnguIHguKXguYjguK3guIcgc2VjdGlvblxuXG4gICAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBlbGVtID0gZXYudGFyZ2V0IGFzIEVULkNvbW1hbmQ7XG5cbiAgICAgICAgaWYoZWxlbS5tYXRjaGVzKCcuY21kLWFkZC1zZWN0aW9uJykpIHtcbiAgICAgICAgICBpZihzZWN0aW9uQ29udGFpbmVyKXtcbiAgICAgICAgICAgIGFkZFNlY3Rpb24oc2VjdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKGVsZW0ubWF0Y2hlcygnLmNtZC1yZW1vdmUtc2VjJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldi50YXJnZXQgYXMgRVQuQ29tbWFuZDtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGVsZW0uY2xvc2VzdDxFVC5Db250YWluZXI+KCcuY21wLXNlY3Rpb24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZihpbnB1dFNlY3Rpb24pe1xuICAgICAgICAgICAgaW5wdXRTZWN0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2VuZXJhdGVTZWN0aW9uQ290YWluZXIobWFpbkNvbnRhaW5lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgLy8g4LiB4Lil4LmI4Lit4LiHIHNlY3Rpb24g4LmB4Lij4LiB4LiX4Li14LmI4Lib4Lij4Liy4LiB4LiO4LmB4Lil4Liw4LmE4Lih4LmI4Liq4Liy4Lih4Liy4Lij4LiW4LiW4Li54LiB4Lil4Lia4LiI4Liy4LiB4LmA4LiH4Li34LmI4Lit4LiZ4LmE4LiC4LiU4LmJ4Liy4LiZ4Lia4LiZXG4gICAgICBpZihzZWN0aW9uQ29udGFpbmVyKXtcbiAgICAgICAgYWRkU2VjdGlvbihzZWN0aW9uQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgfVxuIl19