//Arays and Cycles

//1.Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
//2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
//3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
//4. Преобразовать числовой массив в Boolean
//5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
//6. Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
//7. Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
//8. Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
//9. Реализовать цикл, который выводит в консоль простые числа
//10. Реализовать цикл, который выводит в консоль нечетные числа

//1
let films = ['Дьявол носит Prada', 'Отпетые мошенницы', 'Без меня', 'В метре друг от друга'];
films.forEach((item) => {
    console.log(item);
});

//2
let priozvAvt = ['Mercedes', 'Audi', 'Rolls Roys', 'Bentley'];
priozvAvt = priozvAvt.join(',').split(',');
console.log(priozvAvt);

//3
let friends = ['Katya', 'Ksusha', 'Dasha', 'Natasha'];
friends = friends.map((item) => {
    return item + ' hello';
});
console.log(friends);

//4
let arrNum = [1, 2, 3, 4, 5, 6];
arrNum = arrNum.map((el) => {
    return Boolean(el);
});
console.log(arrNum);

//5
let arrFive = [1, 6, 7, 8, 3, 4, 5, 6];
arrFive.sort((a, b) => {
    return b - a;
})
console.log(arrFive);

//6
let arrSix = [1, 6, 7, 8, 3, 4, 5, 6];
arrSix = arrSix.filter((el) => {
    return el > 3;
})
console.log(arrSix);

//7
function arrIndex(arr, numb) {
    let result = arr.indexOf(numb);
    (result === -1) ? console.log('this element is not exit in array') : console.log(arr.indexOf(numb))
}

arrIndex([1, 2, 3, 4, 5], 5);

//8
function printElements(a) {
    if (a !== undefined && a >= 10) {
        while (a >= 10) {
            console.log(a);
            a--;
        }
    } else {
        console.log('check your number');
    }
}

printElements(50);

//9
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function getPrimesTillNumber(n) {
    let res = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}

console.log(getPrimesTillNumber(20));


//10
for (let i = 0; i < 100; i++) {
    if (i % 1 == 0 && i % 2 != 0) {
        console.log(i)
    }
}