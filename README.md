# Calculator in React

### Contents of this file
- Description
- Installation
- Usage
- Documentation

## Description
- This is a project implementing a simple pocket calculator.
- You can add, substract, divide or multiply numbers.
- To build the project, I followed this tutorial: https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=1389s&ab_channel=WebDevSimplified

## Installation

Here are the steps you need to follow to clone this repository: 

1. Install Git:
If you don't have Git installed, download and install it from https://git-scm.com/.

2. Navigate to the directory where you want to clone the repository. In your terminal, type: 

```sh
cd path/to/your/directory
```
or you can directly open the built-in terminal from VSCode.

3. Clone the reporitory, using: 
```sh
git clone "https://github.com/Luisa-Elena/Calculator-App.git"
```

4. Install the dependencies: 
```sh
cd Calculator-App
cd vite-project
npm install
```

5. In order to run the project, navigate in the vite-project directory and type:
```sh
npm run dev
```

6. Type 'o' to open the web page.

## Usage
- Type the first operand, then select the operation and then type the second operand.
- Click '=' to view the result.
- Now, if you select an operation, the previous result will be the first operand and you can now type the second operand and click '=' to see the new result and so on.
- The 'AC' button clears the current number, and the 'DEL' button deletes the last digit of the current number.

## Documentation
- The App component is the main component responsible for rendering the calculator interface and handling user interactions.
- It uses the React useReducer hook
- The reducer function handles state transitions based on different actions triggered by user interactions and since we used useReducer hook, this function will be called by the dispatch function.
- The dispatch function takes as parameters the type of action and an action payload (digit or operation)
- The 'state' is an object containing the previousOperand, currentOperand and the operation
1. previousOperand: Stores the operand on the left side of the selected operation.
2. currentOperand: Stores the operand on the right side of the selected operation.
3. operation: Stores the selected arithmetic operation.
- The possible actions are:
1. SELECT_DIGIT: Adds a digit to the current operand, handling special cases like leading zeros and multiple decimal points.
2. CLEAR: Clears the calculator's state.
3. SELECT_OPERATION: Selects an arithmetic operation, updating the state accordingly.
4. DELETE_CHARACTER: Deletes the last character from the current operand.
5. EQUAL: Performs the calculation and updates the state with the result.
- The evaluate function performs the actual arithmetic calculation based on the operands and the selected operation.
- Buttons:
1. AC: Clears the calculator's state.
2. DEL: Deletes the last character from the current operand.
3. Arithmetic Operations: Selects the corresponding arithmetic operation.
4. Digits (0-9): Adds the clicked digit to the current operand.
5. . (Decimal Point): Adds a decimal point to the current operand.
6. = (Equals): Calculates the result of the expression.
