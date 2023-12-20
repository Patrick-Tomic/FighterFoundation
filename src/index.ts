import './style.scss'
import logo = require('./logo.jpg')
const header: HTMLElement | any = document.querySelector('header')
const img = document.createElement('img')
img.src = logo
img.alt = 'fighter foundation'
const imgDiv = document.createElement('div')
imgDiv.appendChild(img)
const imgHead = document.createElement('h3')
imgHead.innerHTML = 'Fight to cure Glioblastoma!'
imgDiv.appendChild(imgHead)
header.appendChild(imgDiv)
const h1 = document.createElement('h1')
h1.innerHTML = '"I Think there is Always Hope"<br> -Michelle B. DeJong'
header.appendChild(h1)
