let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
})
