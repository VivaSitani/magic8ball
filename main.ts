input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P0, 0)
    number = randint(0, 4)
    if (number == 1) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
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
let number = 0
pins.digitalWritePin(DigitalPin.P0, 0)
