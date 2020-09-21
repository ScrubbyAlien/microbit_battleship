input.onGesture(Gesture.Shake, function () {
    placeBots()
})
function placeBots () {
    while (listaBotPlatserX.length < 8) {
        Bot = game.createSprite(0, 0)
        Bot.set(LedSpriteProperty.Y, randint(0, 4))
        Bot.set(LedSpriteProperty.X, randint(0, 4))
        if (listaBotPlatserX.length > 0) {
            for (let value of listaBotPlatserX) {
                for (let value of listaBotPlatserY) {
                    // fixa sen
                    if (Bot.get(LedSpriteProperty.X) == value && Bot.get(LedSpriteProperty.Y) == value) {
                    	
                    }
                }
            }
            listaBotPlatserX.push(Bot.get(LedSpriteProperty.X))
            listaBotPlatserY.push(Bot.get(LedSpriteProperty.Y))
        } else {
            listaBotPlatserX.push(Bot.get(LedSpriteProperty.X))
            listaBotPlatserY.push(Bot.get(LedSpriteProperty.Y))
        }
    }
}
let Bot: game.LedSprite = null
let listaBotPlatserX: number[] = []
let listaBotPlatserY: number[] = []
listaBotPlatserY = []
listaBotPlatserX = []
