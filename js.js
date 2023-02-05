
const increaseButton=document.querySelector(".arttir");
const decreaseButton=document.querySelector(".azalt");
const number=document.querySelector("#numara");

let initiaNumber=0;
increaseButton.addEventListener("click",()=>{
   initiaNumber++;
   number.innerHTML=`<i>${initiaNumber}</i>`;
});

    decreaseButton.addEventListener("click",()=>{
        initiaNumber--;
        number.innerHTML=`<i>${initiaNumber}</i>`;
    });


















