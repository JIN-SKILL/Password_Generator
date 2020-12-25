// returns a random element from this collection
function randomPick(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let str =''
  options.lowercase === 'on' ? str += lowerCaseLetters : str
  options.uppercase === 'on' ? str += upperCaseLetters : str
  options.numbers === 'on' ? str += numbers : str
  options.symbols === 'on' ? str += symbols : str
  let collection = str.split('')

  // remove things user do not need
  collection = collection.filter(item => !options.excludeCharacters.includes(item))

  // start generating password
  let password =''
  for (let i = 0 ; i < Number(options.length) ; i++) {
    password += randomPick(collection)
  }

  // return password
  return password
}

// export generatePassword function for other files to use
module.exports = generatePassword
