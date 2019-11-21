exports.greeting = (name) => {
    console.log(`Hello, My name is ${name}`)
}

exports.getEvens = (arr) => {
    let result = [];

    arr.forEach(num => {
        if (num % 2 == 0) result.push(num);
    })

    return result;
}