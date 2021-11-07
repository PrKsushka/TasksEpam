//Prototype Inheritance, Classes
//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

class Animal {
    move = true;
}

class Cat extends Animal {
    color = 'orange';
}

let Vasya = new Cat();
Vasya.move = false;
console.log(Vasya);

