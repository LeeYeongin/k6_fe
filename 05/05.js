// document.addEventListener("DOMContentLoaded", () => {
//     //all은 이미지 모두를 불러온다. 이미지가 한개여도 상관없다.
//     const bts = document.querySelectorAll("img");
//     // console.log(bts);

//     bt1.addEventListener("click", ()=>{
//         handleClick();
//       });
// });

const handleClick = () => { 
    // selectAll이라 아래에서 반복문 사용 가능
    // const bts = document.querySelectorAll("section img") ;
    const bts = document.querySelectorAll(".c1") ;
    const btsNum = [1,1,1];
    
    // for of -> index번호까지 불러옴
    for(let [idx, bt] of bts.entries()) {
      const n = Math.floor(Math.random() * 6) + 1;
      bt.setAttribute("src", `./img/${n}.png`);
      btsNum[idx] = n;

      console.log(btsNum);
    }

    // for of => 파이썬의 for in
    // for(let bt of bts){
    //   const n = Math.floor(Math.random() * 6) + 1;
    //   bt.setAttribute("src", `./img/${n}.png`);
    // }

    // for each
    // bts.forEach((bt) => {
    //   const n = Math.floor(Math.random() * 6) + 1;
    //   bt.setAttribute("src", `./img/${n}.png`);
    //   console.log("click", n)
    // });

    // 기본 for
    // for(let i = 0; i < bts.length; i++) {
    //   const n = Math.floor(Math.random() * 6) + 1;
    //   bts[i].setAttribute("src", `./img/${n}.png`);
    // }

    // for in -> 잘 안씀
    // for(let i in bts) {
    //   const n = Math.floor(Math.random() * 6) + 1;
    //   bts[i].setAttribute("src", `./img/${n}.png`);

    //   console.log("for in i=", bts[i]);
    // }
  }