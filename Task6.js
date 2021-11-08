//Prototype Inheritance, Classes
//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move

class Animal {
    move = true;
}

class Cat extends Animal {
    color = 'orange';
}

let vasya = new Cat();
vasya.move = false;
console.log(vasya);


const animal={
    move:true
}
const cat={
    color:'orange'
}
cat.__proto__=animal;
console.log(cat.move);


class Animal2{

}
class Cat2 extends Animal2{
    color='black'
}
Animal2.prototype.move=true;
let catPetka=new Cat2();
console.log(catPetka.move);