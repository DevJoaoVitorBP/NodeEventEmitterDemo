# EventEmitter Example

This repository contains a simple example of how to use Node.js's EventEmitter class to emit and handle events.

## Code

The code consists of two main functions, `contadorIncremental` and `multiplicacao`, and an EventEmitter.

The `contadorIncremental` function starts a counter that increments every second. When the counter reaches 2, it stops counting and emits the 'multiplicacao' event.

The `multiplicacao` function is a listener for the 'multiplicacao' event. When this event is emitted, the function calculates a random multiplication of two numbers between 0 and 10 and prints the result to the console.

The EventEmitter is used to emit the 'contador' event and listen for the 'contador' and 'multiplicacao' events.

## How to Use

To use this code, you need to have Node.js installed on your computer. After cloning this repository, you can run the code with the `node emitter` command in the terminal.

## Conclusion

This is a simple example, but it shows how you can use EventEmitter to create custom events and listeners in Node.js. You can expand on this code to create more complex applications that react to a variety of events.
