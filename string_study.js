
const string = "0123456789";
/* 
    `hihi ${variable}` => 백틱은 중간에 변수 사용 가능
    'hihi'
    "hihi"
*/
let hihi = `hihi ${string}`;
console.log(hihi); // hihi 0123456789
 /* 
    여러줄을 쓸 경우에 \n 을 사용해야한다.
 */
const desc = 'hihi\n hihi \n';
console.log(desc);
/* 
hihi
 hihi 

*/
/* 
    length 문자열 길이
    [i] 특정 위치에 접근 가능하다.
*/
let length = '01234';
console.log(length.length); //  5
console.log(length[2]); //  2
/* 
    toUpperCase => 전부 대문자
    toLowerCase => 전부 소문자
*/
let sample = "aBcDeF";
console.log(sample.toUpperCase());//    ABCDEF
console.log(sample.toLowerCase());//    abcdef
/* 
    indexOf('') 앞에서부터 특정 문자열 찾기
    lastUndexOf('') 뒤에서 부터 특정 문자열 찾기
    return 문자/문자열의 시작인덱스 값 없으면 -1
*/
console.log(string.indexOf('3'));// 3
console.log(string.lastIndexOf('2'));// 2
/* 
    slice(n,m) => n 시작점  / m 미만점 (포함하지않음, 없으면 문자열 끝까지)
                  n 음수일 경우 배열의 끝에서부터 
    return 조건에 만족하는 문자열    
*/
console.log(string.slice(2,5));//   234
console.log(string.slice(-2));//   34

/* 
    substring(n,m)  n과m 사이 문자열 반환 역으로 m,n도 역시 똑같이 동작 (끝점은 포함하지않음)
    return 조건에 만족하는 문자열
*/
console.log(string.substring(2,3));//   2
console.log(string.substring(3,2));//   2
/* 
    substr(n,m)  n부터 시작하여 m개를 가져온다
*/
console.log(string.substr(2,2));//  23
/* 
    trim()  앞 뒤 공백을 제거한다
*/
let trimStr= '       a    d  cc    ';
console.log(trimStr.trim());//a    d  cc
/* 
    str.repeat(n)   n번 반복한다.
*/
console.log(string.repeat(3));//    012345678901234567890123456789
/* 
    includes('') 특정 문자가 있으면 true , 없으면 false
*/
console.log(string.includes('a'));// false
console.log(string.includes('5'));// true

/**
 * replace
 * g: global 전체 모든 문자열을 변경
 * i: ignore 영문 대소문자를 무시하고 일치하는 패턴 전부
 * return 변경된 값
 */
 let test = "가나다라 마바사 가나";
 let result = test.replace( /가/gi, '나'); 
 console.log(result);

 /**
 * test
 * 
 * 일치여부에 따라 true / false를 반환한다.
 */
  let test1 = "\\asd\\qwer";
  let test2 = "\/asd\\qwer";  
  let result1 = /^[\/\\].*/.test(test1);
  let result2 = /^[\/\\].*/.test(test2);  

 /**
 * match
 * 
 * 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한다. 그리고 그룹핑(캡처)된
 * 값들이 순서대로 배열에 들어있습니다.
 * 
 * 이때 정규식에 g 플래그가 포함되어 있으면, 일치는 객체가 아닌 일치하는
 * 하위 문자열을 포함하는 Array를 반환합니다. 캡처된 그룹은 반환되지 않습니다.
 *  일치하는 것이 없으면 null이 반환됩니다.
 */
var replacedArr = Fitem.str.match(/([\\]["'])(.)*?\1/gi);  
if(replacedArr){    
    replacedArr.forEach((item) => {
        var replaceStr = item.replace(/\\\"/gi,"\"");
        Fitem.str = Fitem.str.replace(item,replaceStr);
    });
}