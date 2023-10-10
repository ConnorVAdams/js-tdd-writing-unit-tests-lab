const isPalindrome = (word) => {
    if (word === '') {
        return false
    } else if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('No special characters allowed')
    } else if (typeof(word) !== 'string') {
        throw new Error('Strings only')
    } else {
        const cleanedWord = word.replace(/\s/g, '').toLowerCase()
        const reversedWord = cleanedWord.split('').reverse().join('')
        return reversedWord === cleanedWord
    }
}

export { isPalindrome }