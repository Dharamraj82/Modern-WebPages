const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var clockElement = document.getElementById('clock');

function clock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString("en-IN", {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    }).toUpperCase(); 
    clockElement.textContent = timeString + ' IST';
}

setInterval(clock, 1000);
