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


document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = [];

    bt.addEventListener("click", () => {
        // 배열초기화
        nums = [];

        // 1~45까지 랜럼수가 중복되지 않게 7개 만들기
        
        while(nums.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            if (!nums.includes(n))
                nums.push(n);
        }
        
        // 코드 1
        // let tags = '';
        // nums.map((v, i) => {
        //     tags = tags + `<span class="sp${parseInt(v/10)}">${v}</span>`;
        //     if (i === 5)
        //         tags = tags + `<span>+</span>`
        //     // console.log(tags);
        // })
        // numDisp.innerHTML = tags;
        
        // 코드 2
        nums = nums.map(v => `<span class="sp${parseInt(v/10)}">${v}</span>`);
        nums.splice(6,0,'<span>+</span>');
        numDisp.innerHTML = nums.toString().replaceAll(',',''); // 배열을 문자열로 방법 1
        nums.join('');   // 배열을 문자열로 방법 2
    })
})