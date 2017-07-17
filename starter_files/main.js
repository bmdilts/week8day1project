//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry, owner) {
  this.status = 'normal';
  this.color = 'black';
  this.hungry = hungry;
  this.owner = owner;
}

const sadie = new Dog(false);
const moonshine = new Dog(true);
const atticus = new Dog(true);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
}
Human.prototype.pet = function(dog){
  dog.status = 'happy';
};
Human.prototype.feed = function(dog){
  dog.hungry = false;
};

const mason = new Human(false);
const julia = new Human(true);


// Instances of Human
// Needed: mason, julia
