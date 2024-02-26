// document.addEventListener("DOMContentLoaded", () => {
//     //all은 이미지 모두를 불러온다. 이미지가 한개여도 상관없다.
//     const bts = document.querySelectorAll("img");
//     // console.log(bts);

//     bt1.addEventListener("click", ()=>{
//         handleClick();
//       });
// });

const handleClick = () => { 
    // const bts = document.querySelectorAll(".c1") ;
    const bts = document.querySelectorAll("img") ;
  
    bts.forEach((bt) => {
      const n = Math.floor(Math.random() * 6) + 1;
      bt.setAttribute("src", `./img/${n}.png`);
      
      console.log("click", n)
    });
   
  }