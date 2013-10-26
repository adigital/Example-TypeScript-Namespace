///<reference path='CommonComponent.ts'/>

import CommonComponent = anothernamespace.CommonComponent;

module namespace2 {
    export class ClassTwo {

        private _component:CommonComponent;

        constructor() {
            this._component = new CommonComponent();
        }
    }
}