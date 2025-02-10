function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute() {
    console.log("start", new Date())

    await delay(2000)
    console.log("★", new Date())

    await delay(3000)
    console.log("◆", new Date())

    await delay(2000)
    console.log("end", new Date())
}

execute();