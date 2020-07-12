
# My First LED Strip Experiment
```ghost
  strip.showColor(neopixel.colors(NeoPixelColors.Red))
  let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
  basic.pause(1000)
  basic.forever(function () {
})
```
```package
neopixel=github:microsoft/pxt-neopixel#v0.7.3
```
## Welcome @unplugged

Let's make your First LED Strip Experiment! 
The hint button on the right shows the correct code for each step. 
Try to use the hints only when you are stuck! Good Luck!

## Step 1: On Start
Let's begin! First, let's add to the ``||basic:on start||`` block. Go to the Neopixel drawer and find the 
``||neopixel:set strip to||`` block and drag it into the ``||basic:on start||`` block. 
This will initialize the ``||variables: strip||`` variable so that you can changes its properties (like its colors). 

Make sure that the DigitalPin is set to ``P0`` and the number of LEDs is set to ``30``.

```blocks
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)

```

The DigitalPin should be set to the pin name of the pin that you plugged the LED strip into. Make sure they match! 

## Step 2: Set the color to Red
Next, Let's add to the ``||basic: forever||`` block. Go to the Neopixels drawer and find the 
``||neopixel:show color||`` block and drag it into the ``||basic:forever||`` block.
Add two of these blocks. The LED strip should start as ``red`` and should also be set to ``blue``.

```blocks
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
```


## Step 3: Add the pauses
Now let's add the pauses, so that it changes colors from ``red`` to ``blue``. 
There should be a ``||basic: pause (ms)||`` of ``1000`` milliseconds between ``red`` and ``blue``. 
And after it turns ``blue``, ``2000`` milliseconds (ms) later, it should turn back to ``red``. 
Remember that this is all occuring in a forever loop.

```blocks
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
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
## Extension
Here is a quick explination about the Neopixel extension. 

For this tutorial, we have provided the Neopixel blocks in the Neopixel drawer. 
If you would like to download the Neopixel extentions in a new project, 
go to the Advanced drawer and click on Extensions. You will be able to search for the "Neopixel" extension. 
There is an image of the extension in the hint section to help you. 


![neopixel image](https://user-images.githubusercontent.com/46551376/85745582-ceacb080-b6d3-11ea-96b2-48aca7aaf921.png)




