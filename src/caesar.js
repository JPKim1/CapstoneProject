// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift> 25) {
    return false
  }
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let message = ""
    input = input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
      let curInput = input[i]
      let curIndex = alphabet.indexOf(curInput)
      if (!alphabet.includes(curInput)) {
        message += curInput
      }
      if (curIndex !== -1) {
        let newIndex
        if (encode) {
          if (shift > 0) {
            newIndex = (curIndex + shift) % 26
            message += alphabet[newIndex]
          } else {
            newIndex = ((curIndex + shift) 
            + 26) % 26
            message += alphabet[newIndex]
          }
        } else {
          if (shift > 0) {
            newIndex = ((curIndex - shift) 
            + 26) % 26
            message += alphabet[newIndex]
          } else {
            newIndex = ((curIndex - shift) 
            + 26) % 26
            message += alphabet[newIndex]
          }
        }
      }
    }
    return message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
