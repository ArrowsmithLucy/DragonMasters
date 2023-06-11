
/* Event details page */

let eventArray = getLocalStorage(KEY_EVENT);
let index = getLocalStorage(KEY_EVENT_INDEX);

/**
 * Function: displays the selected event details. Will show dates and title. 
 */
function displayDetails() {

    let dateFrom = new Date(eventArray[eventIndex].dateFrom).toDateString().slice(0,10)
    let dateTo = new Date(eventArray[eventIndex].dateTo).toDateString()

    document.getElementById("eventDate").innerText = `${dateFrom}  -  ${dateTo}`
    document.getElementById("eventLocation").innerText = `${eventArray[eventIndex].location}`

    //Add event title
}

displayDetails();
showParticipants();


//When Edit button is clicked, swap list of names to editable names
function editParticipants() {

    let membersArray = getLocalStorage(KEY_MEMBERS)
    let edit = document.getElementById("participants")
    let output = `
    <table class="fill">
        <tbody id="editParticipants">`;
    
    for (let i = 0; i < membersArray.length; i++) {
        output += `
        <tr>
            <td class="center">
                <div class="form-check form-switch">
                    <input class="member form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" name="member" value="${i}">
                    <label class="form-check-label" for="flexSwitchCheckChecked" style="width: max-content">${membersArray[i]._firstName} ${membersArray[i]._surname}</label>
                </div>

            </td>
        </tr>
        `
        if ( i === membersArray.length -1 ) { //end of members array, close table
            output += `
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button onclick="addParticipants(); showParticipants();">Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            `
        }
    }
    document.getElementById("participants").innerHTML = output; 
    currentMembers();

}

/**
 * Function: from editable members, will update new list of members.
 */
function addParticipants() {
    let members = document.querySelectorAll(".member");
    let membersArray = getLocalStorage(KEY_MEMBERS);
    let eventArray = getLocalStorage(KEY_EVENT);
    let dummyArray = [];

    for(let i = 0; i < members.length; i++) {
        if (members[i].checked === true) {
            dummyArray.push(membersArray[i]);            
        }
    }
    eventArray[index].attendees.members = dummyArray;
    eventArray[index].attendees.count = eventArray[index].attendees.members.length;
    setLocalStorage(KEY_EVENT, eventArray);    
}


/**
 * Function: Shows current participating members in text form on screen.
 */
function showParticipants() {
    let output = "";
    if (eventArray[eventIndex].attendees.count == 0) {
        //Display button to add members
        output += `No Members Added
                   <div class="row end">
                       <button class="tab-btn" onclick="editParticipants(); currentMembers();">Add Members</button>
                   </div>`
    } 
    else if (eventArray[eventIndex].attendees.count != 0) {
        output += `<div class="center-x">
                        <div class="cols" style="width:max-content" id="showMembers">
                            <ol>`;
        let membersArray = eventArray[index].attendees.members;
        for (let i = 0; i < membersArray.length; i++) {
            output += `<li>${membersArray[i]._firstName} ${membersArray[i]._surname}</li>`
        }
        output += `</ol></div></div>
                    <div class="row end">
                        <button class="tab-btn" onclick="editParticipants(); currentMembers();">Edit</button>
                    </div>`;
    }

    document.getElementById("participants").innerHTML = output;
}



/**
 * Function: If member is currently participating in event, the switch is already checked. 
 */
function currentMembers() {
    
    let membersArray = eventArray[index].attendees.members;

    for (let i = 0; i < membersArray.length; i++) {
        for (let j = 0; j < members.length; j++) {
            if (membersArray[i]._id == members[j]._id) {
                document.getElementsByName("member").checked;
            }
        }
    }


    for (let i=0; i < membersArray.length; i++){ //3 names
        
    }
}