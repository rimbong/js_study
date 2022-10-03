/**
 * Named Exports
 * 
 */
// math.js
export const plus = (a,b) => a+b;
export const minus = (a,b) => a-b;

/*
 import 할 때는 반드시 export 한 이름과 동일하게 import 해야 한다.
  이름을 다르게 하고 싶을 때는 as 키워드를 사용해야 한다.
*/
//main.js 
import {plus} from "./math"
import {minus as min} from "./math" 

/**
 * Default Export
 * 한개의 파일에서 모두 export 한다. 
 * 파일별로 단 한번만 사용 할 수 있다
 */
// math.js
const divide = (a,b) => a/b;
const multiple = (a,b) => a*b;
export default {divide,multiple};

/*
 export default를 import 할 때는 이름을 동일하게 할 필요 없이 새로 이름을 지어준다.
*/
//main.js 
import math from "./math";

/* 결론 : import 할 때 named export는 {} 을 사용해 이름을 명시해주고 default export는 그냥 새로이름을 지어준다.
    즉, import conn , {getPath} 의 경우 conn은 default export를 하고 ,{getPath}는 named export를 한 모듈을 가져온것이다.
    이렇게 섞어서 사용 할수도 있다.
*/

/**
 * Dynamic Import
 * 실제 사용할 module만을 동적으로 import 해준다.
 */
function doMath() {
    import("./math")
    .then(math => math.plus(2,2))
    .catch((err) => {});
}