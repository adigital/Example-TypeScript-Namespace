///<reference path='CommonComponent.ts'/>

module anotherNamespace
{
    export class ClassTwo
    {
        private _component:CommonComponent;

        constructor()
        {
            console.log("ClassTwo");

            this._component = new CommonComponent();
        }
    }
}