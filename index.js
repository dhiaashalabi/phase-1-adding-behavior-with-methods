// Your code here
// Each of these classes will accept the parameters name and sex and will store those values as properties.
class Cat {
    constructor (name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return this.name + " says meow!";
    }
}

class Dog {
    constructor (name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return this.name + " says woof!";
    }
}

class Bird {
    constructor (name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if(this.sex === "male"){
            return "It's me! " + this.name + ", the parrot!";
        }
        else{
            return this.name + " says squawk!";
        }
    }
}