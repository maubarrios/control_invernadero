basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    }
})
