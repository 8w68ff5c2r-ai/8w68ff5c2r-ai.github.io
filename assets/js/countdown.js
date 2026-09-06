const targetDate = new Date("2027-03-06T13:30:00");

function updateCountdown() {

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "Heute ist unser großer Tag!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("countdown").innerHTML = `
        <div class="count-box">${days}<span>Tage</span></div>
        <div class="count-box">${hours}<span>Stunden</span></div>
        <div class="count-box">${minutes}<span>Minuten</span></div>
        <div class="count-box">${seconds}<span>Sekunden</span></div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);