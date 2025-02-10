function getTime() {
    return new Date().toLocaleTimeString()
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function execute() {
    console.log("start",  new Date())

    await delay(10000)
    console.log("★",  new Date())

    await delay(10000)
    console.log("◆",  new Date())
}

execute()

console.log("end",  new Date())