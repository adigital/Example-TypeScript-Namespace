///<reference path='CommonComponent.ts'/>

module AnotherNamespace
{
    export class ClassOne
    {
        private _component:CommonComponent;

        constructor()
        {
            console.log("ClassOne");

            this._component = new CommonComponent();
        }
    }
}