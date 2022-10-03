/* 
변수
let ,const ,var
*/

/* 
var는 한번 선언된 변수를 다시 선언 가능하다.
let , const 는 불가능하다
*/
var var_ = 'abc';
var var_ = 'cde';
console.log(var_); // cde 

/* 
1.심볼
- 자료형 심볼은 유일성을 보장한다. ( 유일한 식별자 )
2.함수 선언방식은 3가지가 존재한다.
3.key값을 key에 담긴 String값으로 하고 싶을 때는 [key] 형태로 선언하면 된다.
*/
let dev = ['1','2','3','4'];
let str = "1234";
const id = Symbol('id') 
const id2 = Symbol('id') 
const occup = Symbol.for('occup');
const occup2 = Symbol.for('occup');
const user = {
    dev,
    str,
    name : 'mike',
    age :30,
    [id] : 'myId',
    [occup] : 'teacher',
    play : function(){
      console.log("play");
    },
    play2(){
      console.log("play2");
    },
    play3:function play3(){
      console.log('play3');
    }
}
console.log(user); 
/* 
{
  dev: [ '1', '2', '3', '4' ],
  str: '1234',
  name: 'mike',
  age: 30,
  play: [Function: play],
  play2: [Function: play2],
  play3: [Function: play3],
  [Symbol(id)]: 'myId',
  [Symbol(occup)]: 'teacher'
}
*/
console.log(user[occup]); //teacher
console.log(id ===id2); // false
console.log(occup ===occup2); // true
/* 
나머지 매개변수
*/
function showName(...names){
    names.forEach((item)=>console.log(item));
}
function sumNum(...nums){
    const sum = nums.reduce((sum,cur)=>{
        return sum + cur;
    })
    console.log(sum);
}
showName('mike','tome','jack'); //[ 'mike', 'tome', 'jack' ]
sumNum(1,2,3,4,5,6,7,8); // 36
/* 
전개구문
*/
//배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1]; // 복제가 된다
arr3.push(4);
console.log([...arr1,...arr2]); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr1,"----",arr3); // [ 1, 2, 3 ] ---- [ 1, 2, 3, 4 ]
//객체
let obj1 = {name:'mike',age:30};
let obj2 = {...obj1};//복제
let obj3 = {ocuup : 'teaher',hobby:'music'};
let obj4 = {...obj1,...obj3};
console.log(obj2); // { name: 'mike', age: 30 }
console.log(obj4); // { name: 'mike', age: 30, ocuup: 'teaher', hobby: 'music' }
/*
구조 분해 할당
*/
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {title, width, height} = options;
console.log(title,width,height);
// 순서가 바뀌어도 상관이 없다.
let t = {q:42,p:30};
let {p,q} = t
console.log(p,q);
/* 
클로저
:함수와 렉시컬 환경의 조합. 함수가 생성될 당시의 외부 변수를 기억하고 
생성이후에도 계속 접근 가능하다
*/
/* 
첫 단계
Lexical 환경
one : 초기화 X  따라서 사용 불가
addOne : function 호이스팅 사용 가능
*/
let one;
/**
 * one : undefined (초기화)
 * addOne : function
 */
one = 1;
/**
 * one : 1
 * addOne : function
 */
function addOne(num){
    console.log(one + num);
}
addOne(5);
/* 
새로운 Lexical 환경 (내부 Lexical )
num : 5
전역 Lexical 환경에서 one 의 값과 addOne의 값을 참조한다.
 */
/*
추가 예
*/
function makeAdder(x) {
    var y = 1;
    return function(z) {
      y = 100;
      return x + y + z;
    };
  }
let add5 = makeAdder(5);
let add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨
console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
