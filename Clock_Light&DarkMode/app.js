const timeEl=document.querySelector(".time")
const btnToggle=document.querySelector(".toggle")

function setTime(){
    // console.log(new Date())

    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    console.log(hours, minutes, seconds)

    // 14 : 30 : 46
    // มีการใส่เลข 0 ถ้าหน่วนเวลาเป็นเลขหลักเดียว
    timeEl.innerHTML=`${hours}:
    ${minutes<10 ? '0'`${minutes}`:minutes}:
    ${seconds<10?`0${seconds}`:seconds}`
}
// event เมื่อมีการ click
btnToggle.addEventListener("click",(e)=>{
    // console.log('toggle mode')

    // เราต้องการจัดการทุก element ใน html 
    const html=document.querySelector('html')
    // ตอนแรก classList จะยังไม่มีอะไีเลย เพราะฉะนั้นเข้า else
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="Dark Mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="Light Mode"
    }
})
setTime()
setInterval(setTime,1000)

