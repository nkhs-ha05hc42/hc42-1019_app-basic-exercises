const hairetu = (ar,a) => {
    ar[2] = a
    return ar
}

const ar = ["A","B"]
const result = hairetu(ar,"C")
console.log(result)