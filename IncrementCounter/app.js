const counters=document.querySelectorAll(".counter")
// เข้าถึงทุก element ที่มี class counter
counters.forEach(counter=>{
    counter.innerText='0'
    // สร้าง function เพื่อนับ
    const updateCounter=()=>{
        // ใส่ + เพื่อ convert string into number
        const target =+counter.getAttribute("data-target")
        const start =+counter.innerText
        const increment = target/200
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText=target
        }
    }
    // สร้างแล้วต้องเรียกใช้ด้วย
    updateCounter()
})