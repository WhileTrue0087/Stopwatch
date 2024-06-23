window.onload = function() {
    var secounds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendsecounds = document.getElementById("secounds")
    var btnStart = document.getElementById("btnStart")
    var btnStop = document.getElementById("btnStop")
    var btnReset = document.getElementById("btnReset")
    var interval;

    btnStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }
    btnStop.onclick = function() {
        clearInterval(interval);
    }
    btnReset.onclick = function() {
        clearInterval(interval)
        tens = "00";
        secounds = "00";
        appendTens.innerHTML = tens;
        appendsecounds.innerHTML = secounds;
    }

    function startTimer() {
        tens++
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            secounds++
            appendsecounds.innerHTML = "0" + secounds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (secounds > 9) {
            appendsecounds.innerHTML = secounds;
        }

    }
}