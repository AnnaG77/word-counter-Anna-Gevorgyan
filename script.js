let inp = document.querySelector('input')
let letters = document.querySelector('.letters')
let words = document.querySelector('.words')
let sentences = document.querySelector('.sentences')
let letterCount = 0
let wordCount = 0
let sentenceCount = 0
let endSymbol = ['.', '!', '?', ':']
inp.addEventListener('input', () => {
    if (inp.value == '') {
        letters.innerHTML = 0
    } else {
        for (let i = 0; i < inp.value.length; i++) {
            if (inp.value[i].toLowerCase() !== inp.value[i].toUpperCase()) {
                letterCount++

            }
            letters.innerHTML = letterCount
            letters.style.color = ''
        }
    }
    letterCount = 0
})

inp.addEventListener('input', () => {
    if (inp.value == '') {
        words.innerHTML = 0
    }
    for (let i = 0; i < inp.value.length; i++) {
        if (i == 0) {
            if (inp.value[i].toLowerCase() !== inp.value[i].toUpperCase() && inp.value[i + 1].toLowerCase() !== inp.value[i + 1].toUpperCase()) {
                wordCount++
            }
        }
        if (inp.value[i].toLowerCase() !== inp.value[i].toUpperCase() && inp.value[i - 1] == ' ' && inp.value[i].toLowerCase() !== inp.value[i].toUpperCase()) {
            wordCount++
        }
        words.innerHTML = wordCount
    }
    wordCount = 0
})

inp.addEventListener('input', () => {
    for (let i = 1; i < inp.value.length; i++) {
        if (inp.value[i].toLowerCase() !== inp.value[i].toUpperCase()) {
            if (inp.value[i + 1] == '.' || inp.value[i + 1] == '!' || inp.value[i + 1] == ':' || inp.value[i + 1] == '?') {
                sentenceCount++
                sentences.innerHTML = sentenceCount
            }
        }
        sentences.innerHTML = sentenceCount
    }
    sentenceCount = 0
})

