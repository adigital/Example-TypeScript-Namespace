///<reference path='anotherNamespace/ClassOne.ts'/>
///<reference path='anotherNamespace/ClassTwo.ts'/>

module namespace
{
    import ClassOne = anotherNamespace.ClassOne;
    import ClassTwo = anotherNamespace.ClassTwo;

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