/* 
Arrays Method
*/
let arr_num= [0,1,2,3,4,5,6];
let arr_str= ['abc','cd','efg','gh','ijk'];
/* 
splice(n,m,item)  => n 시작점 / m 개수(0이하일 경우 해당자리에 추가를 한다.) / item 교체 및 추가할 요소
return 분할한 배열을 리턴한다.
첫번째 인자만 넘기면 해당 인덱스가 가리키는 값을 포함해서 배열의 마지막 값까지 삭제가 됩니다.
*/
console.log(arr_num.splice(2,4)); // [2,3,4,5]
arr_num= [0,1,2,3,4,5,6]; // 없어지므로 재할당 해준다.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1   ["Jan", "Feb", "March", "April", "June"]
console.log(months);

/* 
slice(n,m) => n 시작점 / m 미만점(포함하지 않음, 없으면 끝까지)
var menuObject = Array.prototype.slice.call( document.querySelectorAll('.menu'));   
    위 처럼 querySelectorAll의 결과로 얻는 NodeList는 배열이 아닌데, 이를 배열로 만들어 주기 위해 사용할 수 있다.
*/
console.log(arr_num.slice(2,4)); // [2,3]
console.log(arr_num.slice(2)); // [2,3,4,5,6]
/* 
concact([]) => 그 뒤를 이어서 붙인다.
*/
console.log(arr_num.concat([7,8,9,]));// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
/*  
forEach(Fn)
*/
arr_num.forEach((item,index,arr)=>{
    // item : 배열 각 요소
    // index : 배열 인덱스
    // arr : 배열 자기자신 ( 여기서는 arr_num )
});
/* 
indexOf(c,m) 앞에서 부터 특정 문자열,숫자 (c) 찾기 , m => 시작 인덱스
return 찾은 값의 index , 못찾은경우 -1
*/
console.log(arr_num.indexOf(5,2)); // 5
console.log(arr_num.indexOf(9)); // -1
/* 
include(c) => c가 존해는지 찾는다 
*/
console.log(arr_num.includes(4)); //true
console.log(arr_num.includes(7)); //false
/* 
find(Fn) 
return 만족하는 첫번째 값을 반환
*/
console.log(
    arr_str.find((item)=>{
        return item.length <3
    })
) // cd
/* 
filter(Fn)
만족 하는 값들을 전부 배열로 반환한다.
*/
console.log(
    arr_str.filter((item)=>{
        return item.length < 3
    })
) // ['cd','gh']
/* 
reverse()
배열의 순서를 반대로한 배열을 리턴한다.
*/
console.log(arr_num.reverse());
/* 
map(Fn)
출력값을 보면 알 수 있듯이 map은 모든 원소에 적용이 되어 undefined가 생기는 문제가 있다.
따라서 특정 원소에 대한 적용을 위한다면 filter가 적합하다.
*/
console.log(
    arr_str.map((item,index)=>{      
       if(item.length <3){
        return item;
       }      
    })
)// [ undefined, 'cd', undefined, 'gh', undefined ] 
/* 
join(c)
return 배열을 특정 문자열(c)로 이어서 반환
*/
console.log(arr_str.join('-'));// abc-cd-efg-gh-ijk
/* 
split(c)
return 특정문자열에서 c를 기준으로 분환하려 배열로 반환
주의:빈 문자열이 주어졌을 경우 split()은 빈 배열이 아니라 빈 문자열을 포함한 배열을 반환합니다. 문자열과 separator가 모두 빈 문자열일 때는 빈 배열을 반환합니다.
*/
console.log("a-b-c-d".split('-'));//[ 'a', 'b', 'c', 'd' ]
/* 
Array.isArray(c)
c가 배열인지 유무를 확인한다.
*/
console.log(Array.isArray(arr_str));//true
console.log(Array.isArray("asd"));//false
/* 
reduce(Fn)
accum (누적값) cur (현재값) 
누적값을 적절히 이용할때 사용한다.
*/
console.log(
    arr_num.reduce((accum,cur)=>{
        return accum + cur;
    })
)//21




