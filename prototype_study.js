/* 
상속 , prototype
*/
/*
__proto__ : 기본적인 객체들이 가지고 있다 
*/
const Car ={
    wheels : 4,
    drive(){
        console.log('drive');
    }
}
const Bmw ={
    color : 'red',
    navigaton : '1'

}
Bmw.__proto__=Car; // 상속
Bmw.drive(); // 'drive
console.log(Bmw);
/* 
객체.hasOwnProperty() 객체에 해당 property가 존재하는지 확인한다.
여기서 prototype 체인은 확인하지 않고 자신 객체 자체에 존재하는 프로퍼티의 유무만 체크한다.
*/
console.log(Bmw.hasOwnProperty('color')); // true
console.log('color' in Bmw); // true
console.log(Bmw.hasOwnProperty('drive')); // false
console.log('drive' in Bmw); // true

/*
 생성자 함수 사용의 경우
 */
const Bmw2 = function(color){
    this.color = color;    

}
const x5 = new Bmw2('Red');
const x4 = new Bmw2('blue');

/*상속방법 1 ,생성 할 때마다 이런식으로 상속은 비효율적임
x5.__proto__=Car;
x4.__proto__=Car;
 */
/* 
상속방법 2 , 일반적인 방법으로 가장 안전하다.
 */
Bmw2.prototype.wheels=4;
Bmw2.prototype.drive=function(){
    console.log('dirve~!!');
}
/*
상속방법 3 , prototype을 객체로 표현하여 상속한다.
 이 때는 반드시 constructor를 잡아줘야 한다. 
 */
/* 
Bmw2.prototype={
    constructor:Bmw2,
    wheels : 4,
    drive(){
        console.log('drive~!!')
    }
} */
/**
 *CLASS
 * 생성자 함수와 비슷하지만 다르다. 매서드가 생성될 때 클래스는 prototype에 저장된다.
 *자바스크립트는 자바의 생성자에 비해 조금 너그러운 편이다. 자바에서는 에러인 경우가 
 * 자바 스크립트에서는 상관없이 돌아가는 경우가 있다. 생성자가 이 경우에 해당한다.
 */
class User{
    constructor(name,age){
        this.name = name;        
        this.age = age;        
    }
    showName(){
        console.log('this.name');
    }
}
class CarMade{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    stop() {
        console.log('stop...');
    }
    info(){
        console.log('color : ',this.color);
        console.log('wheels : ',this.wheels);
    }
}
/* 
stop()의 경우 오버라이딩이 되었다. 
부모 메서드를 사용하고 싶은 경우에는 super.stop()을 한다. 
*/
/*
*부모 객체는 빈객체({})를 만들고 this에 이객체를 할당하지만
*자식 객체는 그 과정을 거치치 않는다. 따라서 super를 호출해줘야 하며 이때 
*JAVA의 경우에 super에 매개변수를 맞추지 않으면 에러가 나지만 자바스크립트는 실행이 된다.
*다만 논리적 오류를 피하기 위해서 constructor{(super(color))} 와 같이 매개변수를 맞춰준다
*/
class BmwMade extends CarMade{
    constructor(color){
        super(color);
    }
    park(){
        console.log('park...');
    }
    stop(){
        console.log('bmw stop');
    }
}
const c1 = new BmwMade('blue');
c1.info();

