function func1() {
    return new Promise((resolve) => {
        resolve("Test1");
    })
}

function func2(str) {
    return new Promise((resolve) => {
        resolve("New" + str)
    })
}

async function execute() {
    const result1 = await func1()
    const result2 = await func2(result1)
    console.log(result2)
}

execute()