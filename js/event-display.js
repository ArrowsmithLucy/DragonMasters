
/* Event details page */

let eventArray = getLocalStorage(KEY_EVENT)


function displayDetails() {

    let dateFrom = new Date(eventArray[eventIndex].dateFrom).toDateString().slice(0,10)
    let dateTo = new Date(eventArray[eventIndex].dateTo).toDateString()

    document.getElementById("eventDate").innerText = `${dateFrom} - ${dateTo}`
    document.getElementById("eventLocation").innerText = `${eventArray[eventIndex].location}`

    //Add event title
    
}

displayDetails()

//When participants button/tab is clicked, hide section
function showParticipants() {
    let participants = document.getElementById("viewParticipants");
    if (participants.attributes.getNamedItem("hidden") != null) {
        participants.removeAttribute("hidden") 
    } else {
        participants.setAttribute("hidden", "")
    }
}

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
                    <input type="checkbox">
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
                            <button>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            `
        }
    }

    document.getElementById("participants").innerHTML = output;
      
}

function saveParticipants() {
    
}