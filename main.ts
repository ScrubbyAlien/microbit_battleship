function gameStartAnim () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (inGame) {
        if (crosshair.get(LedSpriteProperty.X) == 4) {
            crosshair.set(LedSpriteProperty.X, 0)
        } else {
            crosshair.change(LedSpriteProperty.X, 1)
        }
    }
})
function startBoomBoom () {
    inGame = true
    crosshair = game.createSprite(0, 0)
}
input.onButtonPressed(Button.AB, function () {
    if (inGame) {
        for (let index = 0; index <= listaBotPlatserX.length; index++) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (inGame) {
        if (crosshair.get(LedSpriteProperty.Y) == 4) {
            crosshair.set(LedSpriteProperty.Y, 0)
        } else {
            crosshair.change(LedSpriteProperty.Y, 1)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (!(inGame)) {
        gameStartAnim()
        placeBots()
        startBoomBoom()
    }
})
function placeBots () {
    listaBotPlatserX = []
    listaBotPlatserY = []
    while (listaBotPlatserX.length < 8) {
        a = randint(0, 4)
        b = randint(0, 4)
        if (0 == listaBotPlatserX.length) {
            listaBotPlatserX.push(a)
            listaBotPlatserY.push(b)
        } else {
            match = false
            for (let index = 0; index <= listaBotPlatserX.length; index++) {
                if (a == listaBotPlatserX[index] && b == listaBotPlatserY[index]) {
                    match = true
                }
            }
            if (!(match)) {
                listaBotPlatserX.push(a)
                listaBotPlatserY.push(b)
            }
        }
    }
}
let match = false
let b = 0
let a = 0
let listaBotPlatserY: number[] = []
let listaBotPlatserX: number[] = []
let crosshair: game.LedSprite = null
let inGame = false
inGame = false
