TypeScript Namespace Example
==========================

Be sure to check out all my [TypeScript tutorials and examples](http://www.codebelt.com/category/typescript/).

You can type the tsc command:

```
tsc -out _compiled/main.js Main.ts
```


Main.ts

```
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
            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
    }
}
```


ClassOne.ts

```
///<reference path='CommonComponent.ts'/>

module AnotherNamespace
{
    export class ClassOne
    {
        private _component:CommonComponent;

        constructor()
        {
            this._component = new CommonComponent();
        }
    }
}
```

ClassTwo.ts

```
///<reference path='CommonComponent.ts'/>

module AnotherNamespace
{
    export class ClassTwo
    {
        private _component:CommonComponent;

        constructor()
        {
            this._component = new CommonComponent();
        }
    }
}
```

CommonComponent.ts

```
module AnotherNamespace
{
    export class CommonComponent
    {
        constructor()
        {
        }
    }
}
```
