///<reference path='CommonComponent.ts'/>

module AnotherNamespace
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