document.addEventListener("DOMContentLoaded", () => {
    const nums = document.querySelectorAll("span");
    const bt = document.querySelector("section button");

    let n;
    let arr = [];

    bt.addEventListener("click", ()=>{
        arr = [];
        for(let i = 0; i<7; i++){
            n = Math.floor(Math.random() * 46) + 1;
            while(arr.includes(n)){
                n = Math.floor(Math.random() * 46) + 1;
            }
            arr.push(n);
        }
        
        let idx = 0;
        for(let num of nums){
            num.innerHTML = arr[idx];
            idx++;
        }
        
    })
})  