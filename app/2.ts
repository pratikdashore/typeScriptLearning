

interface IPerson {
    name: string;
    age: number;
    gender: string;
    height?: number;
}

interface IStudent extends IPerson {
    rollNumber: number;
}

class Student implements IStudent {
    name: string;
    age: number;
    gender: string;
    height?: number;
    rollNumber: number;
}

class AllStudent extends Student {

}

function abc() {
    var a: IArguments = arguments;
}



class Person implements IPerson {
    public gender: string;
    constructor(public name: string, public age: number) {

    }

    private _height: number;
    get height() {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getDetails() {
        return this;
    }

}


var person12: Person = new Person('Pratik', 25);
person12.height = 176;

