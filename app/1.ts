////////////////////// hello TypeScript ///////////////////////////

console.log('Hello TypeScript');



/////////////////////// Premitive data types  ///////////////////////////////////

let aString = 'Pratik';

var Aboolen: boolean;

var aNumber: number;

var aANy: any;
var aArray: number[];

aArray = [123];



/////////////////////////// Object types  /////////////////////

var person: { name: string, age: number } = { name: 'Pratik', age: 25 };


// Functions, class, module, interface, and literal types




////////////////////// functions /////////////////////////////////

function getNames(arr: { name: string, age: number }[]) {
    return arr.map((item) => {
        return item.name;
    });
}

var persons = [person, person];
var names = getNames(persons);
console.log(names);





//////////////////////// ambient declaration ///////////////////


declare var document: Document;




///////////////////////////// Type Definition files /////////////


/////////////////////////////// types ///////////////
























