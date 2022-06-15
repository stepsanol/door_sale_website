import doors from './doors.js';
import cities from './cities.js';

export function filSelect() {
    const selectDoor = document.querySelector(".form_select_door");
    const selectCity = document.querySelector(".form_select_sity");

    const doorsOptions = [];
    const citiesOptions = [];

    for (let i = 0; i < doors.length; i++) {
        doorsOptions[i] = optionElement(`${doors[i].name} - ${doors[i].price} руб`, doors[i].price);
    }

    for (let i = 0; i < cities.length; i++) {
        citiesOptions[i] = optionElement(cities[i].name, i);
    }

    function optionElement(text, value) {
        const option = document.createElement("option");
        option.textContent = text;
        option.value = value;
        return option;
    }

    selectDoor.append(...doorsOptions);
    selectCity.append(...citiesOptions);
}