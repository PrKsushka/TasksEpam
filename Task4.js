//Objects and functions


// -Создать объект car, добавить к нему свойство color со значением 'черный'
// -Изменить свойство color объекта car на 'зеленый'
// - В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let objCar = {
    color: 'black'
}
objCar.color = 'green';
console.log(objCar.color);
objCar.power = () => {
    console.log('The power of motor 1000');
}
objCar.power();


// -На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
function fruits(apple, pear) {
    if (apple < 0 || pear < 0) {
        return 'check count!';
    } else if (apple == 0 && pear == 0) {
        return 'there are no fruits on the store';
    } else if (apple > 0 || pear > 0) {
        return `Count of apples and pears equal to ${apple + pear}`;
    }

}

console.log(fruits(10, 10));


// -В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

function terminal(name) {
    let arrNames = ['Ksenia', 'Masha', 'Dasha', 'Irina'];
    if (name !== undefined && name !== '') {
        let res = arrNames.filter((el) => {
            return el === name
        });
        return (res.length > 0) ? `Привет ${res.join(' ')}` : 'нет такого имени'
    } else return 'check string';
}

console.log(terminal('Irina'));


// -Напишите функцию вычисления типа аргумента и вывод типа в консоль
function decideType(x) {
    return typeof x;
}

console.log(decideType(10));


// -Напишите функцию, которая определяет является ли число простым или нет
function SimpleDimple(a) {
    let flag = true;
    if ((typeof a) === 'number' && a > 1) {
        for (let i = 2; i < a; i++) {
            console.log(i)
            if (a % i == 0) {
                flag = false;
                break;
            }
        }
        return (flag) ? `Number ${a} is simple` : `Number ${a} is not simple`;
    } else {
        return 'check number!';
    }
}

console.log(SimpleDimple(6));