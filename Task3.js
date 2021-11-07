//Conditional Statement and Data Types
// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
let str = 'hello world', num = 5, bool = true;

function calculate(a, sign, b) {
    switch (sign) {
        case '+':
            console.log(`The sum of ${typeof a} and ${typeof b} equal to ${a + b}`);
            break;
        case '-':
            console.log(`The subtract of ${typeof a} and ${typeof b} equal to ${a - b}`);
            break;
        case '*':
            console.log(`The multiply of ${typeof a} and ${typeof b} equal to ${a * b}`);
            break;
        case '/':
            console.log(`The divide of ${typeof a} and ${typeof b} equal to ${a / b}`);
            break;
    }
}

calculate(num, '/', bool);

// Выполнить явное преобразование(number, string, boolean)
console.log(Number(bool), String(num), String(bool), Boolean(num), Boolean(num));