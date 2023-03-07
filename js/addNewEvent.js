

//Getting current local storage
let eventArray = getLocalStorage(KEY_EVENT)


//Creates a new event & adds to local storage
function addNewEvent() {

    let newEvent = {
        dateFrom:document.getElementById("dateFrom").value,
        dateTo:document.getElementById("dateTo").value,
        location:document.getElementById("location").value,
        attendees: {
            members:[]
        },
        races:[]
    };

    localStorage.setItem(KEY_EVENT, eventArray.push(newEvent));
    setLocalStorage(KEY_EVENT, eventArray);

    window.location.assign("../index.html");

}

