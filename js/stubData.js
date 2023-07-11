
let stubData = [];

const person = {
    _firstName: "",
    _surname: "",
    _gender: "",
    _fullName: "",
    _left: "",
    _right: "",
    _sweep: "",
    _drummer: "",
    _weight: "",
    _preference: "",
    _division: "",
    _gender: "",
    _noOfRaces: "",
    _sweepOrDrummerRaces: "",
    _paddling: "",
    Reserve: ""
};

//Sets person template in stubData - length 64
let i = 0;
do {
    stubData[i] = person;
    i++
} while (i < 64);

//Sets first name
for (let j=0; j<stubData.length; j++) {
    stubData[j]._firstName = "Person";
    stubData[j]._surname = "Person";
    stubData[j]._gender = randomGender();
    stubData[j]._fullName = stubData[j]._firstName + " " + stubData[j]._surname;
    stubData[j]._left = "Yes";
    stubData[j]._right = randomSide();
    stubData[j]._sweep = randomSweep();
    stubData[j]._drummer = randomDrummer();
    stubData[j]._weight = randomWeight();
    stubData[j]._preference = randomPreference(j);
    stubData[j]._division = randomDivision();
}


//Random function generators for stubData
function randomGender(){
    let x = Math.floor(Math.random()*2);
    let gender = "";
    if (x == 0){
        gender = "F";
    }
    else if (x == 1){
        gender = "M";
    }
    return gender;
}

function randomSide() {
    let x = Math.floor(Math.random()*12);
    let right = "";
    if (x == 6) {
        right = "No";
    }
    else {
        right = "Yes"
    }
    return right;
}

function randomPreference(person) {
    let preference = "";
    let x = Math.floor(Math.random()*3);
    if (person._right == "No") {
        preference = "Left";
    }
    else if (x == 0) {
        preference = "None";
    }
    else if (x == 1) {
        preference = "Left";
    }
    else if (x == 2) {
        preference = "Right";
    }
    return preference;
}

function randomSweep() {
    let x = Math.floor(Math.random()*10)
    let sweep = "";
    if (x == 5) {
        sweep = "Yes";
    }
    else {
        sweep = "No";
    }
    return sweep;
}

function randomDrummer() {
    let x = Math.floor(Math.random()*4);
    let drummer = "";
    if(x == 2) {
        drummer = "Yes";
    }
    else {
        drummer = "No";
    }
    return drummer;
}

function randomDivision(){
    let x = Math.floor(Math.random()*3);
    let division = "";
    if(x == 0){
        division = "A";
    }
    else if (x == 1){
        division = "B";
    }
    else if (x == 2){
        division = "C";
    }
    return division;
}

function randomWeight(){
    let max = 115;
    let min = 50;
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(stubData)