/////////////////////DEFINE AN OBJECT////////////////////////////////

////////////////// 1. OBJECT LITERAL SINTAX ////////////////////////
////////////////////////////////////////////////////////////////////

/*
const circle = {
    //properties
    radius: 1,
    location: { //the value is another object
        x: 1,
        y: 1
    },
    //methods
    draw: function () {
        console.log('draw');
    }
};

circle.draw(); //calling draw method
*/

/*
{} --> object literal sintax
It's a collection of key value pairs
Inside of {} --> key value pairs

Difference between method and properties:
properties are used to hold values
methods are used to define some logic

It's not a good way to create an object and duplicate it if this object has at least one method 
*/



///////////////////// 2. FACTORIES /////////////////////////////////  
////////////////////////////////////////////////////////////////////

//we use return

/*
function createCircle(radius) {
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
};

const circle = createCircle(1);
circle.draw();
*/

/*
If an object has one or + methods --> that object has behavior (like a person that can do different things)
OBJECT LITERAL SINTAX is a problem only if it has behavior
Instead of OLS --> FACTORIES & CONSTRUCTORS

*/

//////////////////////// 3. CONSTRUCTORS ///////////////////////////
////////////////////////////////////////////////////////////////////

//we use this and new
//The first letter should be upper case

/*
function Circle(radius) {
    //console.log('this', this);
    this.radius = radius; 
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);
*/

//if it doesn't have "new" --> it's a global object --> points to window
//We are not creating an instance of a class like C#!! We don't have classes here


/*
JS doesn't have classes

this
to set properties of the object
this is a reference to the object that is executing this piece of code

this --> reference to an object
. --> to set various properties on that object

const another = new Circle(1); 
will create a new object
then it will set this to point to that object 
it will return that object from this fx
we don't have an explicit return statement, it will happen automatically when we use the new operator
*/

////////////////// BUILD IN CONSTRUCTORS ///////////////////////////

/*
// 1)
let x = {}; 
//is the same as:
let y = new Object();

// 2)
new String(); //is the same as: '', "", `` 
new Boolean(); //true, false
new Number(); //1, 2, 3, ...
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//in console
/*
Circle.name --> "Circle"
Circle.length --> 1 -->the number of arguments

Every object in JS has a constructor property and that references the fx that was used to create an object
*/

/*
const Circle1 = new Function('radius', `
    this.radius = radius; 
    this.draw = function () {
        console.log('draw');
    }
`);

const circle = new Circle1(1);
*/

/*
function Circle(radius) {
    this.radius = radius; 
    this.draw = function () {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]); //for arrays

const another = new Circle(1);
*/

////////////////////////////////////////////////////////////////////
// VALUE VS REFERENCE TYPES
////////////////////////////////////////////////////////////////////


/*
IN JS WE HAVE=

1- VALUE TYPES (OR PRIMITIVE TYPES)
Number, string, boolean, symbol, undefined, null

2- REFERENCE TYPES
Object, fx, array (fx and arrays are also objects)

PRIMITIVES ARE COPIIED BY THEIR VALUE
OBJECTS ARE COPIED BY THEIR REFERENCE

*/


/*
let a = 10; // a = 10
let b = a; // b = 10
a = 20; // a = 20



let x = { value: 10 }; // x = 10
let y = x; // y = 20
x.value = 20; // x = 20
*/

/*
With objects --> if we change the value of the property and we assign that property to a variable, the value of the variable and the property will be the same

When we use an object which is not stored in this variable (x), that object is stored in somewhere else in the memory and the address of that memory location is stored inside that variable

let y = x; is the address or the reference that is copied --> both x and y are pointing to the same object in memory

PRIMITIVES ARE COPIIED BY THEIR VALUE
OBJECTS ARE COPIED BY THEIR REFERENCE
*/

/*
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number); // 10
*/

/*
It's value is copied into this parameter that is local in this function so the number++; is completely independent of let number
we increase 10 to 11 in the function but when the fx is over, the variable is going to go out of the scope 
*/

/*
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // 11
*/


////////////////////////////////////////////////////////////////////
//ADDING AND REMOVING PROPERTIES
////////////////////////////////////////////////////////////////////
/*
function Circle(radius) {
    this.radius = radius; 
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);
*/

//ADDING PROPERTIES

//Option 1
//circle.location = { x: 1 };

//Option 2
//circle['location'] = { x: 1 };

//Option 3
//const propertyName = 'location';
//circle[propertyName] = { x: 1 };


//DELETE PROPERTIES

//delete circle['location'];

/*
//Option 1
delete objeto.propiedad

//Option 2
delete objeto['propiedad']
*/


////////////////////////////////////////////////////////////////////
// ENUMERATING PROPERTIES
////////////////////////////////////////////////////////////////////

/*

//To enumerate all the members and an object
for (let key in circle) {
    //key = will hold the value of one key in this obj

    if(typeof circle[key] !== 'function'){ //get the properties but not the methods
        console.log(key, circle[key]); 
        //circle[key] = value of key --> [] to access a member
    }
}

//To get all the keys and an object
const keys = Object.keys(circle);
console.log(keys);

//if you wanna know if an object has a given property or method
if('radius' in circle)
    console.log('Circle has radius.');

*/


////////////////////////////////////////////////////////////////////
// ABSTRACTION
////////////////////////////////////////////////////////////////////

//Not everything in our objects has to be public and accesible from the outside
//Hide the details and expose only the essentials

/*
function Circle(radius) {
    //let color = 'red'; 
    //it's not set as a property of an object. 
    //It's just a local variable inside this fx
    //When we get out of this fx, this variable goes out of scope and dies


    this.radius = radius; 

    //this.defaultLocation = { x: 0, y: 0 }; //public 
    let defaultLocation = { x: 0, y: 0 }; //private
    //instead of setting it as a property, we define it as a local variable


    //this.computeOptimumLocation = function(factor) {
    //} //public method

    let computeOptimumLocation = function(factor) {

    }//private method

    this.draw = function () {
        //CLOSURE = This fx can access to all the variables of computeOptimumLocation too
  
        //this.computeOptimumLocation(0.1);
        computeOptimumLocation(0.1);

        //ACCESS
        //defaultLocation
        //this.radius



        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();
*/

/*
CLOSURE
Determinates what variables will be accessible to an inner fx

SCOPE is temporary (the variable dies when we finish the fx) but CLOSURE stays there (the variable not die when we finish the fx)

All the things that were private here, were PRIVATE MEMBERS of the circle object
*/


////////////////////////////////////////////////////////////////////
//SETTERS AND GETTERS
////////////////////////////////////////////////////////////////////

//We want to access to private members of the object

/*
function Circle(radius) {
    this.radius = radius; 
    let defaultLocation = { x: 0, y: 0 }; 

    this.getDefaultLocation = function() {
        return defaultLocation;
    } //we can access to defaultLocation as a getDefaultLocation

    this.draw = function () {
        console.log('draw');
    }

    Object.defineProperty(
        this, 
        'defaultLocation', 
        { 
            get: function() { //just getters = properties are read only
                return defaultLocation;
            }, 
        
            set: function(value) { //change values of the properties
                if(!value.x || !value.y)
                    throw new Error('Invalid location');

                defaultLocation = value;
            }
        }
    ); 

}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
*/


////////////////////////////////////////////////////////////////////
//EXERCISES
////////////////////////////////////////////////////////////////////

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    
    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}