///<reference path='ClassOne.ts'/>
///<reference path='ClassTwo.ts'/>

module mainnamespace {
    import ClassOne = namespace1.ClassOne;
    import ClassTwo = namespace1.ClassTwo;

    export class Main {

        private _classOne:ClassOne;
        private _classTwo:ClassTwo;

        constructor() {

            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
    }
}