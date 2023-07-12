const { expect } = require('chai')
const { polybius } = require('../src/polybius')

describe('polybius', () => {
  it('should encode a message', () => {
    const input = 'hello world'
    const expected = '3251131343 2543241341'
    const result = polybius(input, true)
    expect(result).to.equal(expected)
  })

  it('should decode a message', () => {
    const input = '3251131343 2543241341'
    const expected = 'hello world'
    const result = polybius(input, false)
    expect(result).to.equal(expected)
  })

  it('should return false for uneven number of digits in decoding', () => {
    const input = '3251131343 254324134'
    const result = polybius(input, false)
    expect(result).to.be.false
  })
})
