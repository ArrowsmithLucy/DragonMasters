

//Getting current local storage
getLocalStorage(KEY_EVENT)


//Creates a new event & adds to local storage
function addNewEvent() {

    let dateFrom = document.getElementById("dateFrom").value
    let dateTo = document.getElementById("dateTo").value
    let loc = document.getElementById("location").value
    let attendees = Number(document.getElementById("attendees").value)

    let newEvent = {
        dateFrom: "",
        dateTo: "",
        location: "",
        noOfAttendees: ""
    };

    //Data check
    let errorOutput = ""

    if (dateFrom > dateTo) {
        errorOutput = "Select a future date"
    } else {
        newEvent.dateFrom = dateFrom;
        newEvent.dateTo = dateTo;
    }
    if (attendees < 0) {
        errorOutput = "Input positive number"
    }






    // let newEvent = {
    //     dateFrom:document.getElementById("dateFrom").value,
    //     dateTo:document.getElementById("dateTo").value,
    //     location:document.getElementById("location").value,
    //     noOfAttendees:document.getElementById("attendees").value,
    //     races:[]
    // };




    localStorage.setItem(KEY_EVENT, events.push(newEvent));
    setLocalStorage(KEY_EVENT, events);




    // window.location.assign("../index.html");

}

