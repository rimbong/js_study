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

/* 
결론 : import 할 때 named export는 {} 을 사용해 이름을 명시해주고 default export는 그냥 새로이름을 지어준다.
    즉, import conn , {getPath} 의 경우 conn은 default export를 하고 ,{getPath}는 named export를 한 모듈을 가져온것이다.
    이렇게 섞어서 사용 할수도 있다.
*/

/**
 * index.js
 * 이를 사용할 경우 import문에서 파일경로 작성시 해당 폴더 작성만해줘도 자동으로 index.js파일을 import 한다.
 * 
 * Foo
 *  ㄴ index.js
 *  ㄴ app1.js 
 *  ㄴ app2.js
 *  ㄴ app3.js
 * 
 * 이러한 구조에서 Foo 디렉토리의 js들을 import해야 할때
 * import Foo from 'Foo' 만 해주면 알아서 index.js를 import한다.
 * 따라서 index.js에
         import app1 from './app1.js'
         import app2 from './app2.js'
         import app3 from './app3.js'
   와 같이  모듈들을 명시만 해주면 된다.
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