const { expect } = require('chai')
const { substitution } = require('../src/substitution')

describe('substitution', () => {
  it('should encode a string using substitution cipher', () => {
    const input = 'hello world'
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
    const expected = 'rmwwl ilhwq'
    const result = substitution(input, alphabet, true)
    expect(result).to.equal(expected)
  })

  it('should decode a string using substitution cipher', () => {
    const input = 'rmwwl ilhwq'
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev'
    const expected = 'hello world'
    const result = substitution(input, alphabet, false)
    expect(result).to.equal(expected)
  })

  it('should return false if the alphabet is missing', () => {
    const input = 'hello world'
    const alphabet = ''
    const result = substitution(input, alphabet, true)
    expect(result).to.be.false
  })

  it('should return false if the alphabet length is not 26', () => {
    const input = 'hello world'
    const alphabet = 'xoyqmcgrukswafl'
    const result = substitution(input, alphabet, true)
    expect(result).to.be.false
  })

  it('should return false if the alphabet contains duplicate characters', () => {
    const input = 'hello world'
    const alphabet = 'xoyqmcgrukswaflnthdjpzibex'
    const result = substitution(input, alphabet, true)
    expect(result).to.be.false
  })
})
