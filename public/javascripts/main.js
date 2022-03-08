function say() {
    alert('wtf');
}

// say();

async function async1(){
    console.log('async1 start');
     await async2();
     console.log('async1 end')
 }
 async function async2(){
     console.log('async2')
 }
 
 console.log('script start');
 async1();
 console.log('script end')


var a = 0
function foo(){
    var b =14
    function fo(){
        console.log(a, b)
    }
    fo()
}
foo()

const arr = [1,[2,3,[4,5]]]
console.log(arr.join())

var toString = Object.prototype.toString;
console.log(toString.call(1));                      //[object Number]
console.log(toString.call(true));                   //[object Boolean]
console.log(toString.call('mc'));                   //[object String]
console.log(toString.call([]));                     //[object Array]
console.log(toString.call({}));                     //[object Object]
console.log(toString.call(function(){}));           //[object Function]
console.log(toString.call(undefined));              //[object Undefined]
console.log(toString.call(null));


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.play = [1, 2];
//     this.setName = function() {}
// }

// Person.prototype.setAge = function() {}

// function Student(grade) {
//     this.grade = grade;
//     this.setGrade = function() {}
// }

// Student.prototype = new Person()
// var s1 = new Student(12345)
// console.log(s1)

// var name = 'global';
// var obj = {
//     name: 'local',
//     foo: function() {
//         this.name = 'foo';
//     }.bind(window)
// };
// var bar = new obj.foo();
// setTimeout(function() {
//     console.log(window.name);
// }, 0);
// console.log(bar.name);

// var bar2 = bar;
// var bar3 = bar2;
// bar2.name = 'foo2';
// console.log(bar3.name);
