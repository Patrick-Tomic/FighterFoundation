import logo from './logo.jpg'
 import './style.scss'
const header = document.querySelector('header')
const img = document.createElement('img')
img.src = logo
const imgDiv = document.createElement('div')
imgDiv.appendChild(img)
const imgHead = document.createElement('h3')
imgHead.innerHTML = 'Fight to cure Glioblastoma!'
imgDiv.appendChild(imgHead)
header.appendChild(imgDiv)
const h1 = document.createElement('h1')
h1.innerHTML = '"I Think there is Always Hope"<br> -Michelle B. DeJong'
header.appendChild(h1)