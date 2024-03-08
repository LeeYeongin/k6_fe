// document.addEventListener("DOMContentLoaded", () => {
//     const nums = document.querySelectorAll("span");
//     const bt = document.querySelector("section button");

//     let n;
//     let arr = [];

//     bt.addEventListener("click", ()=>{
//         arr = [];
//         for(let i = 0; i<7; i++){
//             n = Math.floor(Math.random() * 46) + 1;
//             while(arr.includes(n)){
//                 n = Math.floor(Math.random() * 46) + 1;
//             }
//             arr.push(n);
//         }
        
//         let idx = 0;
//         for(let num of nums){
//             num.innerHTML = arr[idx];
//             idx++;
//         }
        
//     })
// })  


document.addEventListener("DOMContentLoaded", () =>{
    const bt = document.querySelector("button");
    const numDisp =document.querySelector("#numDisp");

    let nums = [];

    bt.addEventListener("click", ()=> {
        // 배열초기화
        nums=[];

        // 1~45까지 랜럼수가 중복되지 않게 7개 만들기
        while(nums.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            nums.push(n);
        }
        // console.log(nums);

        let tags = '';
        nums.map((v) => {
            tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
            // console.log(tags);
        })
        numDisp.innerHTML = tags;
    })
})