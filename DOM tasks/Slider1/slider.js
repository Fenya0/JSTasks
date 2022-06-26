const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
const items = document.querySelector("#items")
const computedStyles = getComputedStyle(items)


rightBtn.addEventListener("click", e =>{
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight < 500 ) {
    items.style.right = `${currentRight + 100}px`;
    }
})

leftBtn.addEventListener("click", e =>{
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
    items.style.right = `${currentRight - 100}px`;
    }
})

//Первый вариант решения

// let currentRight = 0; 

// rightBtn.addEventListener("click", e =>{
//     e.preventDefault();
//     if(currentRight < 500){
//         currentRight += 100;

//         items.style.right = `${currentRight}px`;    
//     }
    
// });
// leftBtn.addEventListener("click", e =>{
//     e.preventDefault();
//     if(currentRight > 0){
//         currentRight -= 100;

//         items.style.right = `${currentRight}px`;
//     } 
// });

