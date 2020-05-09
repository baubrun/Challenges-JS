let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let animal = "cat"
        if (animal === "dog") {
            resolve("Its a dog!")
        }
        if (animal !== dog){
            reject("It's not a dog!")
        }
    }, 1000)
})


