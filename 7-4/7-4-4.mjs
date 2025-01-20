const tasi = (a,b) => {
    return a+b
}
setTimeout(() => {
    console.log(tasi(1,2),new Date())
    setTimeout(() => {
        console.log("end",new Date())
    })
}, 2000)

console.log("start",new Date())