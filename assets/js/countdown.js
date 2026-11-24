const targetDate = new Date("2027-03-06T13:30:00");

// Texts come from data-* attributes set by the page template (translation files)
const countdownEl = document.getElementById("countdown");
const labels = countdownEl.dataset;

function updateCountdown() {

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.textContent = labels.done;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    countdownEl.innerHTML = `
        <div class="count-box">${days}<span>${labels.days}</span></div>
        <div class="count-box">${hours}<span>${labels.hours}</span></div>
        <div class="count-box">${minutes}<span>${labels.minutes}</span></div>
        <div class="count-box">${seconds}<span>${labels.seconds}</span></div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
