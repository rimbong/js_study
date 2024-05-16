/* 
Object method 
*/
/* 
Object.assign(target, ...sources); 객체 복제 
첫번째 인자에 값을 복사한다. 동일한 키값은 덮어 씌워진다.
*/
const user = {
    age : 30    
}
Object.assign(user,{age:20},{male:'M',name:'mike'});
console.log('assign : ',user);
// assign :  { age: 20, male: 'M', name: 'mike' }

/* 
Object.keys() : 키 배열 반환
*/
console.log('keys : ',Object.keys(user));

/* 
Object.Values() : 값 배열 반환
*/
console.log('values : ',Object.values(user));

/* 
Object.entries() : 키/값 배열 반환 
*/
console.log('entries : ',Object.entries(user));

/* 
Object.fromEntries : 키/값 배열을 객체로 반환
*/
console.log('forEntries : ',Object.fromEntries(Object.entries(user)));

console.log('--------------end--------------');

/*
생성자
*/
function User(name,age){
    // this = {}; 인스턴스 생성시 빈 객체가 만들어진다.
    this.name = name;
    this.age = age;
    // return this; 이것은 반환되어진다.
}
const mike = new User('mike',25);
console.log(mike);

/**
 * for...in
 * /
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
//"a: 1"  "b: 2" "c: 3"

/**
 * 동적으로 key값 만들기
 * person1 :20 , person2 : 20 .... 형태로 만들어짐
 */
for (var i = 0; i <5; i++) {
    Object.assign(user,{["person"+i]]:20});    
}

