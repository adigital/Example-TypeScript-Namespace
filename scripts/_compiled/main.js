var AnotherNamespace;
(function (AnotherNamespace) {
    var CommonComponent = (function () {
        function CommonComponent() {
            console.log("CommonComponent");
        }
        return CommonComponent;
    })();
    AnotherNamespace.CommonComponent = CommonComponent;
})(AnotherNamespace || (AnotherNamespace = {}));
///<reference path='CommonComponent.ts'/>
var AnotherNamespace;
(function (AnotherNamespace) {
    var ClassOne = (function () {
        function ClassOne() {
            console.log("ClassOne");

            this._component = new AnotherNamespace.CommonComponent();
        }
        return ClassOne;
    })();
    AnotherNamespace.ClassOne = ClassOne;
})(AnotherNamespace || (AnotherNamespace = {}));
///<reference path='CommonComponent.ts'/>
var AnotherNamespace;
(function (AnotherNamespace) {
    var ClassTwo = (function () {
        function ClassTwo() {
            console.log("ClassTwo");

            this._component = new AnotherNamespace.CommonComponent();
        }
        return ClassTwo;
    })();
    AnotherNamespace.ClassTwo = ClassTwo;
})(AnotherNamespace || (AnotherNamespace = {}));
///<reference path='AnotherNamespace/ClassOne.ts'/>
///<reference path='AnotherNamespace/ClassTwo.ts'/>
var MyNamespace;
(function (MyNamespace) {
    var ClassOne = AnotherNamespace.ClassOne;
    var ClassTwo = AnotherNamespace.ClassTwo;

    var Main = (function () {
        function Main() {
            console.log("Main");

            this._classOne = new ClassOne();
            this._classTwo = new ClassTwo();
        }
        return Main;
    })();
    MyNamespace.Main = Main;
})(MyNamespace || (MyNamespace = {}));
