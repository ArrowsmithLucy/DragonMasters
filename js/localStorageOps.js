

const KEY_EVENT = "events"
const KEY_RACE = "races"
const KEY_EVENT_INDEX = "eventIndex"
const KEY_RACE_INDEX = "raceIndex"

let events = [];
let races = [];
let raceIndex = "";
let eventIndex = "";


function getLocalStorage(keyIn) {
    return JSON.parse(localStorage.getItem(keyIn));
}

function setLocalStorage(keyToSet, data) {
    let JSONConverted = JSON.stringify(data)
    return localStorage.setItem(keyToSet, JSONConverted)
}

//Setting initial local storage on start up 
//Arrays
if (getLocalStorage(KEY_EVENT) != null) {
    events = getLocalStorage(KEY_EVENT);
} else {
    setLocalStorage(KEY_EVENT, "");
}

if (getLocalStorage(KEY_RACE) != null) {
    races = getLocalStorage(KEY_RACE);
} else {
    setLocalStorage(KEY_RACE, "");
}


// //Indicies
// if (getLocalStorage(KEY_EVENT_INDEX) != null) {
//     eventIndex = getLocalStorage(KEY_EVENT_INDEX);
// } else {
//     setLocalStorage(KEY_EVENT_INDEX, "");
// }

// if (getLocalStorage(KEY_RACE_INDEX) != null) {
//     raceIndex = getLocalStorage(KEY_RACE_INDEX);
// } else {
//     setLocalStorage(KEY_RACE_INDEX, "");
// }