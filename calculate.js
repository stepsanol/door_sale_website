import cities from './cities.js';

export function calc(price, cityIndex, delivery, elevator) {
    const result = Number(price) + cities[cityIndex].deliveryCost * delivery + elevator +cities[cityIndex].installationCost;
    sSum(result);
}

function sSum(price) {
    document.querySelector('.total_coast').innerHTML = price;
}