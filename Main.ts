///<reference path='ClassOne.ts'/>
///<reference path='ClassTwo.ts'/>

import ClassOne = namespace1.ClassOne;
import ClassTwo = namespace2.ClassTwo;

module mainnamespace {
    export class Main {

        private _classOne:ClassOne;
        private _classTwo:ClassTwo;

        constructor() {

            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
    }
}