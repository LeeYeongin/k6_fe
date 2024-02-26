//DOM tree가 완성된 후 실행 >> 개념 알고가기
//{}에 콜백함수가 들어감
//addEventListener 어떤 이벤트 발생하는 지 살피다가 DOMContentLoaded 돔 만들어졌을 때 콜백함수가 실행
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok");

    //버튼생성
    const bt3 = document.createElement("button");
    const bt4 = document.createElement("button");
    //버튼글자
    const bt3Txt = document.createTextNode("버튼3");
    const bt4Txt = document.createTextNode("버튼4");

    bt3.setAttribute("id", "bt3", "bt4");
    bt3.appendChild(bt3Txt);
    bt4.appendChild(bt4Txt);

    //버튼추가하기
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트 달기
    bt3.addEventListener("click", () => {
        handleClick(3);
    })
    bt4.addEventListener("click", () => {
        handleClick(4);
    })
});

//함수작성 1 
/*
function handleClick(n){
    // 메시지 영역 가져오기 1  >>function handleClick(){}일때
    // document.getElementById("msgArea").innerHTML = "안녕하세요" ; 

    // 메시지 영역 가져오기 2  >>변수 n넣었을 때 + h2 메세지 스타일 변경
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;
    
    // 메시지 영역 가져오기 3  
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>` ;
}
*/

//함수작성 2 : 화살표 함수
//js에서는 상수랑 변수밖에 없음. const는 상수값. let는 변수값. =>인수가 들어간 콜백함수
const handleClick = (n) => {
    let msg;
    if (n == 1) msg = "<h2>안녕하세요.</h2>";
    else if (n == 2) msg = "<h2>안녕히 가세요</h2>"
    else if (n == 3) msg = `<h2>버튼 ${n}클릭</h2>`;
    else msg = `<h2>버튼 ${n}클릭</h2>`;

    document.querySelector("#msgArea").innerHTML = msg;
    // document.querySelector("#msgArea").innerHTML = `<>${msg}</ ;
}


/*  수정 전 코드 -> 무시해도 됨
    함수 작성 1
*/
/* 
function handleClick(n) {
    // innerHTML : 속성(값). html문법도 가능
    // 메시지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요";

    // 메시지 영역 가져오기 2
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";

    // 문자열과 변수 사용을 위해서 전체를 `로 감싸기. 변수는 ${}로 감싸기
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;
}
*/

// const = 상수, let = 변수
/*
    함수 작성 2: 화살표 함수
*/
// const handleClick = (n) => {
//     let msg ;

//     if (n==1)
//         msg = "안녕하세요";
//     else
//         msg = "안녕히가세요";
    
//     document.querySelector("#msgArea").innerHTML = `<h2>${msg}</h2>`;
// }