
/* 
call , applly , bind 
객체의 this를 지정해 줄 수 있다.
*/
// call 모든 함수에서 사용 할 수 있으면 this를 특정 객체로 지정할 수 있다.
const Mike ={
    name : 'mike'
}
function update(birth,occup){
    this.birth = birth;
    this.occup = occup
}
update.call(Mike,'1992','singer');
console.log(Mike);
console.log('------------------------------------')
// apply call과 기능이 동일하지만 인자로 받는 값이 배열인것만 다르다.
update.apply(Mike,['1993','dancer']);
console.log(Mike);
console.log('------------------------------------')
// bind는 함수의 this값을 영구하게 정할수 있는 함수를 반환한다.
const updateMike = update.bind(Mike);
updateMike("1991",'person');
console.log(Mike);
console.log('------------------------------------')