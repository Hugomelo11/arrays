const message = 'Hello Javascript Students     ' 
const msgToLowerCase = message.toLowerCase()
const msgToUpperCase = message.toUpperCase()
const messageNoSpaces = message.trim()
const newMessage = message.replace('Students', 'Engineers')
const withSubString = message.substring(9, 14)
message.startsWith('Hello')

console.log(message);
console.log(msgToLowerCase)
console.log(msgToUpperCase)
console.log(messageNoSpaces)
console.log(newMessage)
console.log(withSubString)
console.log(message.startsWith('Hello'))
console.log(messageNoSpaces.endsWith('Students'))
console.log(message.includes('Javascript')) //true 

const mySchool = 'Boca Code'
const myIndex = mySchool.indexOf('code')
console.log(myIndex);

const myString = 'Hello level up students!'
const newString = myString.split(' ')
console.log(newString.reverse())



