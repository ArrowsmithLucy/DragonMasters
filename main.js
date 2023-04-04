/*
JS file for index.html.
Will direct users to pages.
Hide & show divs 
*/


let eventArray = getLocalStorage(KEY_EVENT)
let index = getLocalStorage(KEY_EVENT_INDEX)

//Function tests if event has passed
showUpcomingEvents()

//Function shows upcoming events
function showUpcomingEvents() {
    let output = ""
    for (let i = 0; i < eventArray.length; i++) {
        output += `
        <div class="single-race" onclick="displayEvent(${i}); goToEvent()">
            <div class="grid">
                <table>
                    <tr>
                        <td>Date From:</td>
                        <td>${eventArray[i].dateFrom}</td>
                    </tr>
                    <tr>
                        <td>Date To:</td>
                        <td>${eventArray[i].dateTo}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>${eventArray[i].location}</td>
                    </tr>
                    <tr>
                        <td>No. of Attendees</td>
                        <td>${eventArray[i].attendees.count}</td>
                    </tr>
                </table>
            </div>
        </div>
        `
        
    }
    document.getElementById("upcomingEvents").innerHTML = output;
}


//Onclick - display event details
//Update event index
function displayEvent(index) {
    localStorage.setItem(KEY_EVENT_INDEX, index);
}
function goToEvent() {
    window.location.assign("html/event-display.html");
}


