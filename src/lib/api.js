const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'd90c45bb95fac0b24519b11a4a9311e2';
const LOCATION = '10.795017415231317,106.6164487254423'
const API_URL =`${proxy}https://api.darksky.net/forecast/${API_KEY}/${LOCATION}`;

function getForeCast() {
    return fetch(API_URL)
            .then(res => res.json())
}

export default {
    getForeCast
};