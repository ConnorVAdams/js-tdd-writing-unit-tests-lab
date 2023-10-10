import { isPalindrome } from '../utils.js';

describe('isPalindrome', () => {
    it('returns false if a word is not a palindrome', () => {
        const word = 'car'
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })

    it('returns true if a word is not a palindrome', () => {
        const word = 'racecar'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it('handles upper and lower case letters', () => {
        const word = 'rAcEcaR'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it('returns false for an empty string', () => {
        const bool = isPalindrome('')
        expect(bool).toBe(false)
    })

    it('throws an error in the event of a special character', () => {
        expect(() => {
            isPalindrome('r@c3c4r')
        }).toThrow()
    })

    it("throws an error when the input isn't a string", () => {
        expect(() => {
            isPalindrome(100)
        }).toThrow()
    })
});
