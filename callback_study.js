/*
resolve => 성공 callback 함수 , reject => 실패 callback 함수f를
인자로 갖는다.
const promise = new Promise((resolve,reject)=>{});
new Promise()로 생성된 객체는 2개의 프로퍼티를 갖는다
state : pending ( 대기 상태 )
result: undefined(초기화 상태);
이후 성공하면 state : fullfiled , result : value(값)
    실패하면  state : rejected , result : error(에러값)
*/
function User(){
    return new Promise((res,rej)=>{
        res('dododo');
    })
}
/* const user =User();
user.then(console.log);
console.log(user);
 */
const pr = new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        //resolve('ok');
        //reject(new Error('err messamge....'))
    },3000)
});
/* 
pr.then((result)=>{
        console.log(result);
    },(err)=>{
            console.log(err);
    })
위의 함수는 아래와 같이 사용 할 수도있다.
pr.then((result)=>{

    }
).catch((err)=>{

    }
).finally(
    console.log('end');
)
*/
console.log('---------------------------------------------');
/*
콜백 지옥
*/
/*
const f1 = (callback)=>{
    setTimeout(function(){
        console.log('f1 함수 호출 완료');
        callback();
    },5000);
}
const f2 = (callback)=>{
    setTimeout(function(){
        console.log('f2 함수 호출 완료');
        callback();
    },3000);
}
const f3 = (callback)=>{
    setTimeout(function(){
        console.log('f3 함수 호출 완료');
        callback();
    },2000);
}
console.log('시작');
// 아래와 같은 콜백 함수는 정말 보기 않좋다
f1(function(){
    f2(function(){
        f3(function(){
            console.log('end');
        })
    })
})
*/
// 위의 콜백 지옥을 promise를 사용하여 표현하자
function f1(){
    return new Promise(
        (res,rej)=>{
            setTimeout(() => {
                res('1번 함수완료')
                //rej(new Error('실패 동작'));
            },5000);            
        }
    );
};
function f2(message){
    console.log(message);
    return new Promise(
        (res,rej)=>{
            setTimeout(() => {
                res('2번 함수 완료');
            }, 3000);
        }
    );
};
function f3(message){
    console.log(message);
    return new Promise(
        (res,rej) =>{
            setTimeout(() => {
                res('3번함수 완료');
            }, 2000);
        }
    );
};

/* f1()
 .then((res)=> f2(res))
 .then((res)=> f3(res))
 .then((res)=> console.log(res))
 .catch((err)=> console.log(err))
 .finally(()=>{
     console.log('end')
 }) 
 */
/* 
위 와같이 then을 이용한 체인은 시간을 많이 잡아먹는다
동시에 실행하여 시간을 줄이는 방법 Promise.all 이 있다
전부 실행하여 수행시간을 단축 시킬 수 있지만 하나라도 실패시 어떤 데이터도
받을수 없다. 즉, 트랜잭션의 원자성과 같이 하나의 정보라도 누락되면
안되는 경우에 사용한다.
return 값은 배열로 받는다.
*/
// Promise.all([f1(),f2(),f3()])
//  .then((res)=>console.log(res))
//  .catch((err)=>console.log(err))
 /*
 Promise.race는 all과는 다르게 하나의 함수라도 완료되면 수행이 
 중단된다.
 즉, 다양한 용량의 데이터를 보여줄 때 하나라도 완료된다면 그 데이터를
 보여줄때 사용한다.
 */
// Promise.race([f1(),f2(),f3()])
//  .then((res)=> {
//     console.log(res);
//     console.log('end');
// })

//async await 
//async => 항상 promise를 반환하게 해준다. 따라서 바로 then을 사용할
//      수 있게 해준다.
// 위의 user 함수를 이렇게 바꿀수 있다.
async function User2(){
    return 'dododo'
}
/* const user2 =User2();
user2.then(console.log);
console.log(user2); */


async function getName(){
    return "mike1";
}
//getName().then((name)=>console.log(name));

//Promise.resolve() 같이 표기하는것은 보통 sync처럼 사용할 때만 사용한다
//promise내부에 또 promise를 쓰는경우 비동기로 작동하지 않는다(내부 Promise는 작동하지 않을 수 있다.)
async function getName2(){
    return Promise.resolve('mike2');
}
//getName2().then((res)=> console.log(res));
//getName2().catch((err)=>console.log(err));

function getName3(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },2000)
    })
}
async function showName(){
    const result = await getName3('mike3');
    console.log(result);
}
//showName();
/* 
이 then 체인을 async를 이용해 좀더 가독성있게 쓸수 있다.
f1()
 .then((res)=> f2(res))
 .then((res)=> f3(res))
 .then((res)=> console.log(res))
 .catch((err)=> console.log(err))
 .finally(()=>{
     console.log('end')
 }) 
 */

/* async function callFunction(){
    try {
           
        const c1 = await f1();
        const c2 = await f2(c1);        
        const c3 = await f3(c2);
        console.log(c3);
    } catch (error) {
        console.log(error);
    }
} */

//callFunction().then(console.log);

// 위코드는 내부에서는 동기적으로 작동하므로 다소 비효율적이다.
// 따라서 위코드를 병렬적으로 구성해보겠다
// 위의 코드는 10초가 걸리지만 아래 코드는 5초가 걸린다.
/* async function callFunction2(){
    try {
        // 동시 실행 (비동기)
        const c1Promise =  f1();
        const c2Promise =  f2();        
        const c3Promise =  f3();
        // 아래는 동기화(await)
        const c1 = await c1Promise;
        const c2 = await c2Promise;
        const c3 = await c3Promise;        
        return `${c1}  ${c2}  ${c3}`
    } catch (error) {        
    }
}
//인자가 같은경우 생략가능 callFunction2().then((res)=>console.log(res)) 
callFunction2().then((console.log)); */

//위의 코드를 좀더 깔끔하게 쓰면 Prmomise all을 사용한다.
function callFunction3(){
    try {
        return Promise.all([f1(),f2(),f3()]).then( res=>res.join(' - '));
    } catch (error) {
        console.log(error);
    }
}
//callFunction3().then(console.log);



