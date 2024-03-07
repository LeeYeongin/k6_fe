// 자바스크립트 데이터 타입
// 기본 타입(const: 변수의 값이 안바뀌는 경우, let: 변수의 값이 바뀌는 경우)
let n1 = 10;            // 정수
let n2 = 10.5;          // 실수
let s1 = "안녕하세요.";  // 문자열 (''도 사용가능. 구분 X)

// console.log("정수: ", n1);
// console.log("실수: ", n2);
// console.log("문자열: ", s1);

// 문자열 순회
// console.log("문자열 for in")
// for(let i in s1){ // in을 사용하여 key(index)값이 나옴
//     console.log("문자열: ", s1[i]);
// }

// console.log("문자열 for of")
// for(let c of s1){ // 해당 값을 가져옴
//     console.log("문자열: ", c);
// }

// 배열
// tailing 쉼표 사용가능(마지막에 아무 의미 없이 ,추가 가능)
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,];
console.log("배열: ", arr);
console.log("배열의 요소 접근 arr[1]: ", arr[1]);

// 배열 순회
console.log("배열 for in")
for(let i in arr){
    console.log("배열: ", arr[i]);
}

console.log("배열 for of")
for(let c of arr){
    console.log("배열: ", c);
}

// arr1 만들기
let arr1 = [0,0,0,0,0,0,];
for(let i in arr){
    arr1[i] = arr[i];
}
console.log("arr1 = ", arr1);

// arr4 만들기
let arr4 = [];
console.log("arr4 = ", arr4);

// 반복문으로
for(let item of arr){
    arr4.push(item); // 배열 안에 아무것도 없으므로 push해서 넣어줘야함(python의 append와 동일)
}
console.log("반복문으로 arr4 = ", arr4)

// for(let i in arr){ 위 for of를 for in으로 작성하는 경우
//     arr4.push(arr[i]); 
// }

// 배열 map함수(인수로 callback함수 사용)
console.log("배열 map함수")
arr4 = arr.map((v)=>{
    let s = v + '🍩';
    console.log(v,',', s);

    return s;
});
console.log("map함수로 arr4 = ", arr4)

let arr2 = arr.map((v, i)=>{ // 한개씩 접근 (값, 키)순서
    console.log("map => v: ",v);
    console.log("map => i: ",i); // i는 index값을 받아옴
    return v+"🔥";
}); 
console.log("arr2: " , arr2);

console.log("배열 map함수 : 콜백")
// 콜백의 인수가 1개인 경우는 () 생략가능
// 콜백의 body에 실행문이 없고 return문만 있으면 {}와 return 생략 가능
arr2 = arr.map( v =>  v+"🍴"); 
console.log("arr2: " , arr2);

arr4 = arr.map(v=> v + '🍩');
console.log("map함수로 arr4 = ", arr4);

// 인수가 2개이상이면 무조건 ()
arr4 = arr.map((v,i)=> v + '🍩' + i);
console.log("map함수로 arr4 + index = ", arr4);

// filter
let arr21 = [];
for(let item of arr) {
    if(isNaN(item)) // isNaN(i): i가 숫자이면 false를 반환하는 
        arr21.push(item);
}
console.log("반복문 필터 arr21 = ", arr21);

let arr31 = [];
// arr31 = arr.filter((v)=>{
//     if(isNaN(v))
//         console.log(v);
//     return !isNaN(v) // 숫자만 사용
// });
arr31 = arr.filter(v => isNaN(v)); // return문만 있는 함수
console.log("filter함수 arr31 = ", arr31);

// 비교하기
// arr31 = arr.map(v => isNaN(v)); // return문만 있는 함수
// console.log("map함수인경우 arr31 = ", arr31);

// 전개연산자
let arr22 = [...arr]; // 배열(arr)을 해체시켜 하나씩 넣음
console.log("전개연산자: ", arr22) 

// ------------------------------------------------------
//           map()과 filter()는 배열에만 사용가능
// ------------------------------------------------------

// 오브젝트
// tailing 쉼표 사용가능
let obj = {'🍎': 1, '🥕': 2, '🍌': 3,}; // 순서가 중요하지 않음
console.log("오브젝트: ", obj);
console.log("오브젝트 요소 접근 obj['🍎']: ", obj['🍎']);

// 오브젝트 순회
console.log("오브젝트 for in")
for(let i in obj){
    console.log("오브젝트: ", obj[i]);
}

console.log("오브젝트 for of")
for(let c of Object.entries(obj)){ 
    console.log("오브젝트: ", c); // [key, value]값(배열)을 쌍으로 동시에 가져옴
    console.log("오브젝트 키: ", c[0]);
    console.log("오브젝트 값: ", c[1]);
}

for(let [k,v] of Object.entries(obj)){  // 구조 분해
    console.log("오브젝트 키: ", k);
    console.log("오브젝트 값: ", v);
}

console.log("오브젝트 키 배열: ", Object.keys(obj));
console.log("오브젝트 키 배열: ", Object.values(obj));
let arr3 = Object.keys(obj).map((k) => k + obj[k]);
console.log("arr3: ", arr3);