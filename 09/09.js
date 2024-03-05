// 자바스크립트 데이터 타입
// 기본 타입(const: 안바뀜, let: 바꿀 수 있음)
let n1 = 10;            // 정수
let n2 = 10.5;          // 실수
let s1 = "안녕하세요.";  // 문자열

console.log("정수: ", n1);
console.log("실수: ", n2);
console.log("문자열: ", s1);

// 문자열 순회
for(let i in s1){ // in을 사용하여 key값이 나옴
    console.log("문자열: ", s1[i]);
}

for(let c of s1){ // 해당 값을 가져옴
    console.log("문자열: ", c);
}

// 배열
// tailing 쉼표 사용가능(마지막에 아무 의미 없이 ,추가 가능)
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,];
console.log("배열: ", arr);
console.log("배열의 요소 접근 arr[1]: ", arr[1]);

// 오브젝트
let obj = {'🍎': 1, '🥕': 2, '🍌': 3,}; 
console.log("오브젝트: ", obj);
console.log("오브젝트 요소 접근 obj['🍎']: ", obj['🍎']);