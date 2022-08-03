let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(0, 4)
    if (number == 1) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else if (number == 3) {
        basic.showLeds(`
            # # # # #
            # . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (number == 4) {
        basic.showString("Try Again")
    } else {
    	
    }
})
