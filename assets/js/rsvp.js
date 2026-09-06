const form = document.getElementById("rsvp-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        alert("Vielen Dank für eure Rückmeldung!");
        form.reset();
    } else {
        alert("Beim Senden ist ein Fehler aufgetreten.");
    }
});