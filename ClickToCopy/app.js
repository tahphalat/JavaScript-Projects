const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click", (e)=>{
    // console.log("Starting copy")
    coupon.select()
    coupon.setSelectionRange(0,999999)
    // copy ลง clipboard
    navigator.clipboard.writeText(coupon.value)

    // Show status
    btn.textContent="!!Complete Copy!!"

    // Reset after copy 3 seconds
    setTimeout(()=>{
        btn.textContent="Copy"
    },3000)
})