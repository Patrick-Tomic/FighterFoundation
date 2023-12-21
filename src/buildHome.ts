const main: HTMLBaseElement = document.querySelector('main')
const whoisFighter = document.createElement('h1')
whoisFighter.innerHTML = 'Who is a Fighter?'
const fighterDiv = document.createElement('div')
fighterDiv.appendChild(whoisFighter)
const fighterP = document.createElement('p')
fighterP.innerHTML = 'A fighter does not inspire because they have cancer, but a fighter inspires because of the character with which they fight it. A fighter faces challenges with unwavering positibity and relentless hope - hope that they might take every opportunity to make a difference in this world. They fight for love, for family, for life. Fight on!'
fighterDiv.appendChild(fighterP)
main.appendChild(fighterDiv)
