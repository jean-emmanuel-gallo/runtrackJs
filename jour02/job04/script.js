document.addEventListener("keydown", function(event) {
    var keyloggerElement = document.getElementById("keylogger");

    var letter = event.key.toLowerCase();
    if (/^[a-z]$/.test(letter)) {
        if (document.activeElement === keyloggerElement) {
            keyloggerElement.value += letter + letter;
        } else {
            keyloggerElement.value += letter;
        }
    }
}

)