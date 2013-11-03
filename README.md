TypeScript-Namespace-Issue
==========================

You can type the tsc command:

```
tsc -out scripts/_compiled/main.js scripts/Main.ts
```


Main.ts

```
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
            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
    }
}
```


ClassOne.ts

```
///<reference path='CommonComponent.ts'/>

module anotherNamespace
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

module anotherNamespace
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
module anotherNamespace
{
    export class CommonComponent
    {
        constructor()
        {
        }
    }
}
```