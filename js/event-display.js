/* Event details page */

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