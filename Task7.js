//String, RegExp,Date
//1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
//2. Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
//3. Получить день, месяц и год текущей даты и по отдельности вывести в консоль

//1
const str = 'ahb acb aeb aeeb adcb axeb'

function regExpStr1(str) {
    if (str !== undefined && str.length > 0) {
        let res = str.match(/a.b/g);
        return res.join(', ');
    } else {
        return 'check your string!'
    }
}

console.log(regExpStr1(str));

//2
const str1 = '2+3 223 2223';

function regExpStr2(str) {
    if (str !== undefined && str.length > 0) {
        let result = str.match(/\d\+\d/g);
        return result.join('');
    } else {
        return 'check your string!'
    }
}

console.log(regExpStr2(str1));


//3
function defineWhatIsTheDateToday() {
    let date;
    let day;
    let month;
    let year;
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    return `Day: ${day}, Month: ${month}, Year: ${year}`
}

console.log(defineWhatIsTheDateToday());
