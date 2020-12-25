function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  const options = {
    length: '8',
    // lowercase: 'on',
    // uppercase: 'on',
    numbers: 'on',
    // symbols: 'on',
    excludeCharacters: ''
  }

  // create a collection to store things user picked up
  let str =''
  options.lowercase === 'on' ? str += lowerCaseLetters : str
  options.uppercase === 'on' ? str += upperCaseLetters : str
  options.numbers === 'on' ? str += numbers : str
  options.symbols === 'on' ? str += symbols : str
  let collectionArray = str.split('')

  // remove things user do not need
  let removeArray = options.excludeCharacters.split('')
  collectionArray = collectionArray.filter(item => !removeArray.includes(item))

  // start generating password
  let password =''
  for (let i = 0 ; i < Number(options.length) ; i++) {
    const index = Math.floor(Math.random() * collectionArray.length)
    password += collectionArray[index]
  }

  // return password
  return password
}

console.log(generatePassword())
