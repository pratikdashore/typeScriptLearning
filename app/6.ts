////////////////////Generics//////////////

function printMe<T>(arr: T[]) {
    arr.forEach(element => {
        console.log(element);
    });
}


var numArray = [1, 2, 3, 4, 5, 6];

var strArray = ['1', '2', '3', '4', '5', '6'];

printMe(numArray);

printMe(strArray);

class RequestMapper<T> {
    url: string;
    params: T;
}



///////////////////////////////////

function sealed(parsms) {
    return function (constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
}

@sealed('Prams')
class sealedClass {

}







