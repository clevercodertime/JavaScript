const user = {
    firstName : "Bilal",
    lastName : "Asghar",
    email : "bilalasghar@gmail.com",
    age : 22,
    address : "Goteriala, Gujrat Pk",
    about(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    },
    is18(){
        return this.age >= 18;
    }
}
const user1 = user.about();
console.log(user1);
const user2 = user.is18();
console.log(user2);