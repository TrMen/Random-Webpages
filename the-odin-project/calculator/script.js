/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-shadow */
// Tokenize the expression. A token is an object with a kind as a key, and the value as a value
const OPERATORS = ['/', '*', '-', '+'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const TERMINAL_SYMBOLS = NUMBERS.concat(OPERATORS, ['(', ')']);

function operate(operator, lhs, rhs) {
  if (operator === '/') {
    if (rhs === 0) {
      throw new SyntaxError('Division by zero is impossible');
    }
    return lhs / rhs;
  }
  if (operator === '*') {
    return lhs * rhs;
  }
  if (operator === '+') {
    return lhs + rhs;
  }
  if (operator === '-') {
    return lhs - rhs;
  }

  throw new SyntaxError(`${operator} is not a valid operator`);
}

function tokenize(expression) {
  let tokens = Array.from(expression);

  tokens = tokens.filter((char) => TERMINAL_SYMBOLS.includes(char));

  let openParenthesis = false; // This is a hack but my calculator doesn't do nested parentheses.

  let tokenIndex = 0;
  tokens = tokens.reduce((tokens, char) => { // Split into numbers and operators
    if (char === '(') {
      if (tokens[tokenIndex].number === '') {
        tokens.splice(tokenIndex, 1);
        tokens.push({ operator: char }, { number: '' });
      } else {
        tokens.push({ operator: char });
      }
      tokenIndex += 1;
      if (openParenthesis) throw new SyntaxError('Nested parentheses are not supported');
      openParenthesis = true;
    } else if (char === ')') {
      tokenIndex += 1;
      tokens.push({ operator: char });
      if (!openParenthesis) throw new SyntaxError('There is a lost closed parenthesis');
      openParenthesis = false;
    } else if (OPERATORS.includes(char)) {
      tokenIndex += 2;
      tokens.push({ operator: char }, { number: '' }); // Push the current operator and a new empty number
    } else if (NUMBERS.includes(char)) { // It's a number so we append to the current number token
      if (tokens[tokenIndex].number === undefined) throw new SyntaxError("That's not a valid expression");
      if (char === '.' && tokens[tokenIndex].number.includes('.')) throw new SyntaxError('Only one decimal point per number allowed');

      tokens[tokenIndex].number += char;
    } else {
      throw new SyntaxError(`Unknown symbol ${char}`);
    }
    return tokens;
  }, [{ number: '' }]);

  // If there are any empty numbers, some operators were without surrounding numbers
  if (tokens.some((token) => token.number === '')) throw new SyntaxError("That's not a valid expression");
  return tokens;
}

function evaluate(tokens) {
  // If there are parentheses, evaluate the content recursively
  let changed = true;
  while (changed) {
    changed = false;
    const openingIndex = tokens.findIndex((token) => token.operator === '(');
    if (openingIndex === -1) break;

    const closingIndex = tokens.findIndex((token, index) => index >= openingIndex && token.operator === ')');
    if (closingIndex === -1) throw new SyntaxError('There are unclosed paretheses');

    const parenResult = evaluate(tokens.slice(openingIndex + 1, closingIndex));

    tokens.splice(openingIndex, closingIndex - openingIndex + 1, { number: parenResult });
    changed = true;
  }

  // Evaluate each operator in their order of precedence defined by the OPERATORS ordering
  OPERATORS.forEach((operator) => {
    let tokenIndex = 0;
    while (tokenIndex < tokens.length) {
      if (tokens[tokenIndex].operator === operator) {
        const result = { number: operate(operator, +tokens[tokenIndex - 1].number, +tokens[tokenIndex + 1].number) };
        tokens.splice(tokenIndex - 1, 3, result); // Delete operator and operands, insert result
        // Because we delete one element on the left, continuing with this index is the next token
      } else {
        tokenIndex += 1;
      }
    }
  });

  return tokens[0].number;
}

function calculate(expression) {
  let tokens;
  try {
    tokens = tokenize(expression);
    resultsDisplay.textContent = evaluate(tokens);
  } catch (error) {
    if (error instanceof SyntaxError) {
      resultsDisplay.textContent = error.message;
    } else {
      throw error;
    }
  }
}

function keyDownHandler(event) {
  if (event.keyCode === 13) { // Return key
    calculate(display.textContent);
  }
}

const display = document.getElementById('display');

const numberButtons = [...document.getElementsByClassName('number-btn')];
numberButtons.forEach((button) => button.addEventListener('click', () => { display.textContent += button.textContent; }));

const operatorButtons = [...document.getElementsByClassName('operator-btn')];
operatorButtons.forEach((button) => button.addEventListener('click', () => { display.textContent += button.textContent; }));

const evalButton = document.getElementById('evaluate');
evalButton.addEventListener('click', () => calculate(display.textContent));

const resultsDisplay = document.getElementById('results-display');

document.body.addEventListener('keydown', keyDownHandler);

document.getElementById('clear-btn').addEventListener('click', () => { display.textContent = ''; resultsDisplay.textContent = ''; });
document.getElementById('backspace').addEventListener('click', () => { if (display.textContent) display.textContent = display.textContent.slice(0, -1); });
