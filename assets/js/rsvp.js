document
.getElementById("rsvp-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Vielen Dank für eure Rückmeldung!"
    );

});

/*
Power Automate URL eintragen

await fetch(
"DEINE_FLOW_URL",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);
*/

});