///<reference path='CommonComponent.ts'/>

import CommonComponent = anothernamespace.CommonComponent;

module namespace1 {
    export class ClassOne {

        private _component:CommonComponent;

        constructor() {
            this._component = new CommonComponent();
        }
    }
}