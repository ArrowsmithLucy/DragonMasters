
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
    if (document.getElementById("participants").attributes == null) {
        document.getElementById("participants").removeAttribute("hidden")        
    } else {
        document.getElementById("participants").setAttribute("hidden", "")
    }
}


// home-wrapper
// in-line
// columns
// single-race
// members-box