import { store, updateLowerThird } from '../store';
import LowerThird from '../models/lowerThird';

const ltBtn = document.querySelector('#fire-graphic');

if (ltBtn) {
    ltBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let ltTitle = document.querySelector('#lt-title').value;
        let ltType = document.querySelector('#lt-type-selector').value;
        let ltSubtitle = document.querySelector('#lt-subtitle').value;
        let ltColour = document.querySelector('#lt-colour').value;
        let ltTime = store.timer.formattedTime;

        if (ltType == -1 || ltType === "") {
            alert('You must select a type to fire a lower third.');
            return false;
        }

        let lowerThird = new LowerThird(ltTitle, ltSubtitle, ltType, ltTime, ltColour);

        updateLowerThird(lowerThird);
    })
}