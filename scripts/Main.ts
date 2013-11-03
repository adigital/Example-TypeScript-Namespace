///<reference path='AnotherNamespace/ClassOne.ts'/>
///<reference path='AnotherNamespace/ClassTwo.ts'/>

module MyNamespace
{
    import ClassOne = AnotherNamespace.ClassOne;
    import ClassTwo = AnotherNamespace.ClassTwo;

    export class Main
    {
        private _classOne:ClassOne;
        private _classTwo:ClassTwo;

        constructor()
        {
            console.log("Main");

            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
    }
}