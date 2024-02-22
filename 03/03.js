/* 
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

/*
    함수 작성 2: 화살표 함수
*/
const handleClick = (n) => {
    let msg ;

    if (n==1)
        msg = "안녕하세요";
    else
        msg = "안녕히가세요";
    
    document.querySelector("#msgArea").innerHTML = `<h2>${msg}</h2>`;
}