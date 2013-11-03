var anotherNamespace;
(function (anotherNamespace) {
    var CommonComponent = (function () {
        function CommonComponent() {
            console.log("CommonComponent");
        }
        return CommonComponent;
    })();
    anotherNamespace.CommonComponent = CommonComponent;
})(anotherNamespace || (anotherNamespace = {}));
///<reference path='CommonComponent.ts'/>
var anotherNamespace;
(function (anotherNamespace) {
    var ClassOne = (function () {
        function ClassOne() {
            console.log("ClassOne");

            this._component = new anotherNamespace.CommonComponent();
        }
        return ClassOne;
    })();
    anotherNamespace.ClassOne = ClassOne;
})(anotherNamespace || (anotherNamespace = {}));
///<reference path='CommonComponent.ts'/>
var anotherNamespace;
(function (anotherNamespace) {
    var ClassTwo = (function () {
        function ClassTwo() {
            console.log("ClassTwo");

            this._component = new anotherNamespace.CommonComponent();
        }
        return ClassTwo;
    })();
    anotherNamespace.ClassTwo = ClassTwo;
})(anotherNamespace || (anotherNamespace = {}));
///<reference path='anotherNamespace/ClassOne.ts'/>
///<reference path='anotherNamespace/ClassTwo.ts'/>
var namespace;
(function (namespace) {
    var ClassOne = anotherNamespace.ClassOne;
    var ClassTwo = anotherNamespace.ClassTwo;

    var Main = (function () {
        function Main() {
            console.log("Main");

            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
        return Main;
    })();
    namespace.Main = Main;
})(namespace || (namespace = {}));
