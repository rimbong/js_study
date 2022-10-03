/* 
Object method 
*/
/* 
Object.assign() 객체 복제 
첫번째 인자에 값을 복사한다. 동일한 키값은 덮어 씌워진다.
*/
const user = {
    age : 30    
}
Object.assign(user,{age:20},{male:'M',name:'mike'});
console.log('assign : ',user);

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
    this.name = name;
    this.age = age;
}
const mike = new User('mike',25);
console.log(mike);




