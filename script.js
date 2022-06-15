import {calc} from './calculate.js';
import {filSelect} from './fil-select.js';

filSelect();

const ariaBildings = document.querySelector('.location_check');
const ariaFloorElev = document.querySelector('.floor_check');

ariaBildings.onclick = (event) => {
    switch (event.target.id) {
        case 'newBilding':
            ariaFloorElev.classList.add('show');
            additionalInformation('');
            break;
        case 'oldBilding':
            ariaFloorElev.classList.add('show');
            additionalInformation('+3000 руб. если требуется расширение дверного проёма <br> +500 руб. если требуется подрезка <br> +500 руб. если требуются монтажные уши');
            break;    
        case 'privateHouse':
            ariaFloorElev.classList.remove('show');
            additionalInformation('+3000 руб. если требуется расширение дверного проёма <br> +500 руб. если требуется подрезка <br> +500 руб. если требуются монтажные уши');
            break;  
    }
}

function additionalInformation(text) {
    const ariaAdditionalInformation = document.querySelector('.location_check');
    ariaAdditionalInformation.innerHTML = text;
}

document.addEventListener('click',() => {
    const selectDoor = document.querySelector(".form_select_door");
    const selectCity = document.querySelector(".form_select_sity");
    const floorNumber = document.querySelector('.counter_input');

    const delivery = document.getElementById('byCompany').checked ? 1 : 0;
    const cityIndex = selectCity.value;
    const doorPrice = selectDoor.value;
    const floor = Number(floorNumber.value);
    const elevator = floor * 200;

    calc(doorPrice, cityIndex, delivery, floor);
})