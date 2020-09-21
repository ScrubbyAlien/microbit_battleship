input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # . .
            . # # . .
            . . . # .
            . . . # #
            . . . . #
            `)
        basic.showString("Hello!")
    }
})
basic.showString("Hej Axel! ")
