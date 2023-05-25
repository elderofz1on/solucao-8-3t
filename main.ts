input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(2000)
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Snake)
    basic.pause(2000)
    basic.clearScreen()
    radio.sendNumber(2)
})
radio.setGroup(100)
