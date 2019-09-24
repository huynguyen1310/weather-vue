const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'd90c45bb95fac0b24519b11a4a9311e2';
const API_URL =`${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`

function getCoordinates(location) {
    return fetch(`${GEO_API_URL}${location}`)
            .then(res => res.json())
}

function getForeCast(lat,lng) {
    return fetch(`${API_URL}${lat},${lng}`)
            .then(res => res.json())
}

function getAddress(lat,lng) {
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
            .then(res => res.json())
}

export default {
    getForeCast,
    getCoordinates,
    getAddress
};