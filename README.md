# p5.js Opepen Starter

## Quick Overview

This p5.js project will create an Opepen using the Opepen framework's grid. Each cell is a random color.

Run index.html to test.

You are free to use and modify this for whatever you want.

### Canvas Size
When this project loads and when the window is resized, it will read the width and height and resize to the largest square possible. Although the canvas is square, there's a line in the code that extends the background color to whatever size the screen is. To see the true square, comment out line 70 (`document.body.style.backgroundColor = backgroundColor;`).

The p5.js canvas itself is set to 1970 x 1970. The dimensions of the Opepen are based on this, so don't change it. The canvas will resize based on the logic above anyway. Also, I wish I chose a better number than 1970, but that's how I made it.

### Simulated token hash
This code uses a random hash to generate the random colors. In practice, you'll use a platform's unique token hash, but to test specific hashes, you can append them as a url parameter, like this: `index.html?hash=0xbead17f78577f01ec6d5638e96d7e0343fdafeb893fdd3123ffacf900adb386b`. You can find the hash for any output as a console log.

### Save png
Press `s` to save a png file.
