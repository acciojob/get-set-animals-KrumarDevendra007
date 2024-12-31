//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	get makeSound(){
		conssole.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {

	purr(){
		conssole.log(`purr`);
	}
}

class Cat extends Animal {

	bark(){
		conssole.log(`woof`);
	}
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
