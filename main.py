listaBotPlatserX: List[number] = []
listaBotPlatserY: List[number] = []
def gameStartAnim():
    for index in range(2):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
def startBoomBoom():
    pass

def on_gesture_shake():
    gameStartAnim()
    placeBots()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def placeBots():
    global listaBotPlatserX, listaBotPlatserY
    listaBotPlatserX = []
    listaBotPlatserY = []
    for index2 in range(8):
        listaBotPlatserX.append(randint(0, 4))
        listaBotPlatserY.append(randint(0, 4))