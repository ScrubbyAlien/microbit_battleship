let inGame = false
let crosshair: game.LedSprite = null
let listaBotPlatserX: number[] = []
let listaBotPlatserY: number[] = []
let a = 0
let b = 0
let match = false
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
    	
    }
})
function startBoomBoom () {
    inGame = true
    crosshair = game.createSprite(0, 0)
}
input.onButtonPressed(Button.B, function () {
    if (inGame) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    gameStartAnim()
    placeBots()
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
