const date = document.querySelector('#currentyear')

const today = new Date()

date.innerHTML = `<span>${today.getFullYear()}</span>`

const lastModified = document.querySelector('#lastModified')

lastModified.innerHTML = document.lastModified