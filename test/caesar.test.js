const { expect } = require('chai')
const { caesar } = require('../src/caesar')

describe('caesar', () => {
  it('should encode a string with positive shift', () => {
    const input = 'hello world'
    const shift = 5
    const expected = 'mjqqt btwqi'
    const result = caesar(input, shift, true)
    expect(result).to.equal(expected)
  })

  it('should decode a string with negative shift', () => {
    const input = 'czggj rjmgy'
    const shift = -5 
    const expected = 'hello world'
    const result = caesar(input, shift, false)
    expect(result).to.equal(expected)
  })

  it('should preserve non-alphabetic characters', () => {
    const input = 'hello, world!'
    const shift = 3
    const expected = 'khoor, zruog!'
    const result = caesar(input, shift, true)
    expect(result).to.equal(expected)
  })

  it('should return false for invalid shift value', () => {
    const input = 'hello world'
    const shift = 0
    const result = caesar(input, shift, true)
    expect(result).to.be.false
  })
})