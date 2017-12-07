// Our main class
class Animal {
    animalName: string;
    constructor(aName: string) { 
        this.animalName = aName; 
    }
    // Below method is used to describe movement of the animal.
    move(distance: number) {
        console.log(`${this.animalName} has moved ${distance} miles.`);
    }
    // Below method is used to describe sound of the animal.
    makeSound(soundName: string) {
        console.log(`${this.animalName} makes a sound called ${soundName}.`);
    }
}

// Class Tiger inherits properties from main class, Animal and also adds its own features.
class Tiger extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    move(distance) {
        super.move(distance);
        console.log("Moves so stealthily...");
    }
    makeSound(soundName) {
        super.makeSound(soundName);
        console.log("Look how he roars!");
    }
}

// Similarly, class Lion inherits properties from main class, Animal and also adds its own features.
class Lion extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    move(distance) {
        super.move(distance);
        console.log("Moves so majestically...");
    }
    makeSound(soundName) {
        super.makeSound(soundName);
        console.log("Look how he growls!");
    }
}

// Below we create objects of the classes we have just created.
let zoey = new Tiger("White tiger Zoey");
let simba: Animal = new Lion("Simba, king of jungle");

// Call corresponding functions
zoey.move(6);
zoey.makeSound(`roaring`);
simba.move(8);
simba.makeSound(`growling`);