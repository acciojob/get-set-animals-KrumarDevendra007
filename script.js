//complete this code
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound the animal makes
    makeSound() {
        console.log(`The ${this.species} makes a sound.`);
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    constructor() {
        super("Cat"); // Initialize the species as "Cat"
    }

    // Method to log "purr"
    purr() {
        console.log("purr");
    }
}


const myCat = new Cat("Siamese");
myCat.makeSound; // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound; // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
