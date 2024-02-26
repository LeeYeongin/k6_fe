const handleClick = (n) => {
    // 1. 버튼 클릭
    // 2. 버튼 클릭시 이미지 변경
    const rnd = Math.floor(Math.random() * 6) + 1;
  
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    img1.setAttribute("src", `./img/${rnd}.png`);
    img2.setAttribute("src", `./img/${n}.png`)

    if(n == rnd)
        document.querySelector("#msgArea").innerHTML = "맞음";
    else
        document.querySelector("#msgArea").innerHTML = "틀림";

    
}