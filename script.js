
const String = str => {
    return [...str].map((char, index) => `${index}${char.toUpperCase()}`).join('')
};

const Inputnput = prompt("Enter a string:")

const indexchar = String(input)

document.write(indexchar);

