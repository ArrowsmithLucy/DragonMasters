
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
                <label class="switch">
                    <input name="member" value="${i}" type="checkbox" class="member">
                    <span class="slider round"></span>
                </label>
            </td>
            <td class="pad-left">
                ${membersArray[i]._firstName} ${membersArray[i]._surname}
            </td>
        </tr>
        `
        if ( i === membersArray.length -1 ) {
            output += `
                    <tr>
                        <td class="center">
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td class="pad-left">
                            ${membersArray[i]._firstName} ${membersArray[i]._surname}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <button onclick="addParticipants();">Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            `
        }
    }
    document.getElementById("participants").innerHTML = output; 
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
    let members = document.querySelectorAll(".member");
    let membersArray = eventArray[index].attendees.members;

    for (let i = 0; i < membersArray.length; i++) {
        //set member to checked
    }
}