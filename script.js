
const String = str => {
    return [...str].map((char, index) => `${index}${char.toUpperCase()}`).join('')
};

const Input = prompt("Enter a string:")

const indexchar = String(Input)

document.write(indexchar);

