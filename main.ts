let Bot: game.LedSprite = null
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 8; index++) {
        Bot = game.createSprite(0, 0)
        Bot.set(LedSpriteProperty.Y, randint(0, 4))
        Bot.set(LedSpriteProperty.X, randint(0, 4))
    }
})
