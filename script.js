const string = str => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += `${i}${str[i].toUpperCase()}`
    }
    return result;
}

const input = prompt("Enter a string:")

const result = string(input)
document.write (result)

