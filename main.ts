let snake = game.createSprite(2, 2)
basic.forever(function () {
    while (true) {
        let sprite: game.LedSprite = null
        sprite.move(1)
        basic.pause(100)
    }
})
