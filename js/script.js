console.log('--- # 1.');
// Vic2 поменять на Vic. 
var name = 'Vic 2';
var user = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};

const getName = user.getName.bind(user); 
console.log(getName());


console.log('--- # 2.');
// Arni.
const user1 = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};
const user2 = {
    name: 'Arni',
}

const getName4 = user1.getName;
console.log(getName4.call(user2))