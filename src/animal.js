var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Our main class
var Animal = /** @class */ (function () {
    function Animal(aName) {
        this.animalName = aName;
    }
    // Below method is used to describe movement of the animal.
    Animal.prototype.move = function (distance) {
        console.log(this.animalName + " has moved " + distance + " miles.");
    };
    // Below method is used to describe sound of the animal.
    Animal.prototype.makeSound = function (soundName) {
        console.log(this.animalName + " makes a sound called " + soundName + ".");
    };
    return Animal;
}());
// Class Tiger inherits properties from main class, Animal and also adds its own features.
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
        console.log("Moves so stealthily...");
    };
    Tiger.prototype.makeSound = function (soundName) {
        _super.prototype.makeSound.call(this, soundName);
        console.log("Look how he roars!");
    };
    return Tiger;
}(Animal));
// Similarly, class Lion inherits properties from main class, Animal and also adds its own features.
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
        console.log("Moves so majestically...");
    };
    Lion.prototype.makeSound = function (soundName) {
        _super.prototype.makeSound.call(this, soundName);
        console.log("Look how he growls!");
    };
    return Lion;
}(Animal));
// Below we create objects of the classes we have just created.
var zoey = new Tiger("White tiger Zoey");
var simba = new Lion("Simba, king of jungle");
// Call corresponding functions
zoey.move(6);
zoey.makeSound("roaring");
simba.move(8);
simba.makeSound("growling");
