const form = document.getElementById("rsvp-form");

// Messages come from data-* attributes set by the page template (translation files)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            alert(form.dataset.success);
            form.reset();
        } else {
            alert(form.dataset.error);
        }
    } catch (err) {
        alert(form.dataset.error);
    }
});
