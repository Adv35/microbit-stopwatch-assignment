input.onButtonPressed(Button.A, function () {
    while (seconds >= 0) {
        basic.pause(1000)
        seconds += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    seconds += 0
    hours = 0
    minutes = 0
    seconds = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (hours))
    basic.showString(":")
    basic.showString("" + (minutes))
    basic.showString(":")
    basic.showString("" + (seconds))
    basic.clearScreen()
})
let minutes = 0
let seconds = 0
let hours = 0
hours = 0
seconds = 0
minutes = 0
basic.forever(function () {
    if (seconds == 59) {
        seconds = 0
        minutes += 1
    } else if (minutes == 59) {
        seconds = 0
        minutes = 0
        hours += 1
    } else if (hours == 23) {
        seconds = 0
        minutes = 0
        hours = 0
    }
})
