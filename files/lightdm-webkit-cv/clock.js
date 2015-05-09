// Simple clock, perhaps eventually ought to be modified for 12 hour time...maybe
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    m=fixTime(m);
    document.getElementById('clock').innerHTML=h+":"+m;
    // Update time every 500 ms = 5 seconds
    t=setTimeout('startTime()', 500)
}
// This just formats it nicely so we don't get 10:1 PM
function fixTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i
}
// Start the clock as soon as we finish loading
window.onload=startTime;
