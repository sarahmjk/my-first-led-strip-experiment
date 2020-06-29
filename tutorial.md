
# My First LED Strip Experiment

## Before we get started  
Below we have provided the Neopixel blocks in the Neopixel drawer. 
If you would like to download the neopixels extentions in a new project, 
go to the Advanced drawer and click on Extensions. You will be able to search for the "Neopixels" extension. 
There is an image of the extension in the hint section. 
```ghost
  strip.showColor(neopixel.colors(NeoPixelColors.Red))
  let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
  basic.pause(1000)
  basic.forever(function () {
})
```
```package
neopixel=github:microsoft/pxt-neopixel
```

![neopixel image](https://user-images.githubusercontent.com/46551376/85745582-ceacb080-b6d3-11ea-96b2-48aca7aaf921.png)



## Step 1: On Start
Let's add to the ``||basic:on start||`` block. Go to the Neopixels drawer and find the 
``||neopixels:set strip to||`` block and drag it into the ``||basic:on start||`` block.

```blocks
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)

```
## Step 2: Set the color to Red
Let's add to the ``||basic: forever||`` block. Go to the Neopixels drawer and find the 
``||neopixels:show color||`` block and drag it into the ``||basic:forever||`` block.
The LED strip should start as ``red``.
```blocks

basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))

})
```

## Step 3: Set the color to Blue
After ``||basic: pause (ms)||`` of ``10000`` milliseconds , ``||Neopixels:show color||`` should be set to ``blue``. 
And after it turns ``blue``, ``2000`` milliseconds (ms) later, it should turn back to ``red``. 
Remember that this is all occuring in a forever loop.

```blocks
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
})
```
## Congratulations!
Congratulations on making your First LED Strip Experiment!
Click the hint button on the right to check your code. 
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and watch your LED change color!

```blocks
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
})
```



