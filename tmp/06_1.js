// DOM tree가 다 완성됐을 때,
document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("section img");
    const bts = document.querySelectorAll("section button");

    for(let bt of bts){
        bt.addEventListener("click", ()=>{
            // console.log(bt.textContent); bt.innerHTML과 동일한 기능
            // console.log(bt.innerHTML);
            const rnd = Math.floor(Math.random() * 6) + 1;
            const n = parseInt(bt.innerHTML.slice(-1)); // 문자열 -> 숫자 type으로 변환
            console.log(n)

            imgs[0].setAttribute("src", `./img/${rnd}.png`);
            imgs[1].setAttribute("src", `./img/${n}.png`);

            // === :  값, 타입을 모두 비교
            if(n === rnd)
                document.querySelector("#msgArea").innerHTML = "맞음";
            else
                document.querySelector("#msgArea").innerHTML = "틀림";
        })
    }
})