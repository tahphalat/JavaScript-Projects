const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    // Output
    count.innerHTML=input.value.length
})