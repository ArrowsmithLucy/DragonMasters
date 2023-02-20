
let membersArray = getLocalStorage(KEY_MEMBERS)


//Function to display member details
function displayMembers() {
    let output = ''
    for (let i=0; i < membersArray.length; i++) {
        output += `
        <tr>
            <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault">
                </div>
            </td>
            <td>${membersArray[i]._firstName}</td>
            <td>${membersArray[i]._surname}</td>
            <td>${membersArray[i]._gender}</td>
            <td>${membersArray[i]._sweep}</td>
            <td>${membersArray[i]._drummer}</td>
            <td>${membersArray[i]._weight}</td>
            <td>${membersArray[i]._preference}</td>
            <td>${membersArray[i]._division}</td>
            <td>${membersArray[i]._noOfRaces}</td>
            <td>${membersArray[i]._sweepOrDrummerRaces}</td>
        </tr>
        `
    }

    document.getElementById("members").innerHTML = output
}

displayMembers()


function sortMembers() {
    
}

//Sort members alphabetically surname
let sortedSurname = membersArray.sort(
    function(a,b) {
        let nameA = a._surname.toUpperCase()
        let nameB = b._surname.toUpperCase()
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        return 0
    });

let sortedFirstName = membersArray.sort(
    function(a,b) {
        let nameA = a._firstName.toUpperCase()
        let nameB = b._firstName.toUpperCase()
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        return 0
    });

let sortedWeight = membersArray.sort(
    function(a,b) {
        if (a._weight > b._weight) {
            return 1;
        }
        if (a._weight < b._weight) {
            return -1;
        }
        return 0
    });

