///<reference path='CommonComponent.ts'/>

module anotherNamespace
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