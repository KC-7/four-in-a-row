# [FourStar.Pizza](fourstar.pizza)

FourStar.Pizza is a web-based game of Connect 4 that allows players to earn 4 stars by connecting 4 pizzas. The game board is a 6x7 grid that players take turns dropping their pizza onto, aiming to get 4 in a row in any direction.

The game also has a responsive design that adapts to different screen sizes, ensuring players can play the game on any device.

Play the game here: [fourstar.pizza](fourstar.pizza)!

## How to Play
Players take turns placing their pizza on the board by clicking on a cell highlighted in green. The players pizza token will fall into the empty cell. The first player to connect 4 pizzas in a row, either horizontally, vertically or diagonally, wins the game.

## JavaScript

The `DOMContentLoaded` event waits for the entire HTML document to load before running the code. It then creates several constants that will be used throughout the code, such as the game board squares, the result display, and the current player display.

The next part of the code creates a 2D array called `winningArrays`, which contains all the possible ways to win the game.

The `checkBoard()` function iterates through each possible winning combination to check if all the squares in the combination have the same class (either `player-one` or `player-two`). If a winning combination is found, the function updates the result display, adds the gold class to each winning square, and disables the game board squares. The winner variable is also updated to keep track of which player won.

The `showAvailableCells()` function highlights the cells that are `available` for the player to choose from. It does this by checking if the cell below each square is taken and if the current square is not taken. If these conditions are met, the `available` class is added to the square, which changes its background color.

The `resetAvailableCells()` function removes the `available` class from all squares.

The `for` loop at the end of the code sets up the onclick event for each game board square. It calls `showAvailableCells()` to highlight the available cells for the current click. If the square below the clicked square is not taken, it adds the class of the current player to the square, toggles the current player, and updates the display. It then calls `resetAvailableCells()` and `showAvailableCells()` again to update the available cells. If the clicked square is not a valid move, an alert is displayed. Finally, `checkBoard()` is called to see if a winning combination has been found.

## CSS

### Background
The CSS code provided is for styling a web-based game. The body of the page has a black and white background with a repeated image of a pizza. The font used is 'Courier New', with a bold weight.

### Centering Items
The page items are centered using `display: flex`, `flex-direction: column`, `justify-content: center`, and `align-items: center`.

### Background Opacity
The `body::before` pseudo-element changes the opacity of the background to 0.4 using the `background-color` property.

### Header and Player Styling
The `.header` and `#player` elements are styled with the `color` property set to lime.

### Result Container Styling
The `#result-container` element has a yellow background color, a dark goldenrod border with a 5-pixel width, and a 5-pixel border radius. It also has a margin-top of 15 pixels.

### Result Styling
The `#result` element has a red color.

### Hide Class
The `.hide` class sets the display to none.

### Grid Styling
The `.grid` element has a 3-pixel lime border, a height of 360 pixels, a width of 420 pixels, and is displayed as a flex container with wrapping. It has a light grey background color.

The `.grid div` elements have a height and width of 60 pixels.

The `.grid-cell` elements have a box-sizing property set to border-box, a 2-pixel grey border, and a 50% border radius. They also have a lemon chiffon background color.

The `.available` class sets a 5-pixel dotted black border with a radial gradient background color.

### Player Styling
The `.player-one` and `.player-two` classes have background images of pizza and are displayed using the `background-size` property set to cover. They also have an animation of sliding in from the top of the page.

The `.player-one-border` and `.player-two-border` classes have a 3-pixel solid border of red and blue, respectively. They also have a background color that matches their respective border colors.

### Animation
The `.gold` class has a background image of a star and an animation of twirling 360 degrees.

### Media Queries
The CSS code includes media queries for smaller and larger screens. For screens with a width of 460 pixels or less, the grid width and height are adjusted to 240 pixels and 280 pixels, respectively. The `.grid div` elements have a height and width of 40 pixels.

For screens with a width of 1024 pixels or more, the grid width and height are adjusted to 540 pixels and 630 pixels, respectively. The `.grid div` elements have a height and width of 90 pixels.

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Credits

- I find kubowania's Youtube channel really useful. The main code (app logic) was from  [her GitHub account](https://github.com/kubowania/connect-four) and then modified to improve finctionality and styling. 

- The CI full template was used for basic tools.

- The images were provided by Flaticon.

- Parts of the readme documentation was created by passing snips of code into ChatGPT. 