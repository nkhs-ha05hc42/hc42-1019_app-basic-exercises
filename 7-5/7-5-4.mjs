function func1() {
    return new Promise((resolve) => {
        resolve("Test1")
    });
}

function func2(str) {
    return new Promise((resolve) => {
        resolve("New" + str)
    });
}

func1()
    .then(result1 => func2(result1))
    .then(result2 => console.log(result2))