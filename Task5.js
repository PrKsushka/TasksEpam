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
    return arr.indexOf(numb);
}

console.log(arrIndex([1, 2, 3, 4, 5], 5));

//8
function elements(a) {
    do {
        console.log(a);
    } while (a > 10)
}

elements(5);

//9
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function getIsPrime(n) {
    let res = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}

console.log(getIsPrime(20));


//10
let arrTen = [];
for (let i = 1; i <= 20; i++) {
    arrTen.push(i);
}
for (let i = 0; i < arrTen.length; i++) {
    if (arrTen[i] % 3 == 0) {
        console.log(arrTen[i])
    }
}