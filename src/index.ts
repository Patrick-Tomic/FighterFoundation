import './style.scss'
import logo = require('./logo.jpg')
import buildHome from './buildHome'
const header: HTMLElement | any = document.querySelector('header')
const img = document.createElement('img')
img.src = logo
img.alt = 'fighter foundation'
const imgHead = document.createElement('h3')
imgHead.classList.add('imgHead')
imgHead.innerHTML = 'Fight to cure Glioblastoma!'
header.appendChild(img)

const h1 = document.createElement('h1')
h1.innerHTML = '"I Think there is Always Hope"<br> -Michelle B. DeJong'
header.appendChild(h1)
header.appendChild(imgHead)
const nav = document.createElement('nav')
const tabs: string[] = ['Home', 'About', 'Programs', 'Events', 'Blog', 'Contact', 'Store']
tabs.forEach((tab) => {
  const div = document.createElement('div')
  const li = document.createElement('li')
  li.classList.add(tab)
  li.innerHTML = tab
  div.appendChild(li)
  if (tab === 'About') {
    const li = document.createElement('li')
    li.classList.add('hidden')
    li.innerHTML = 'Meet the board'
    const liB = document.createElement('li')
    liB.innerHTML = 'Remembering Michelle'
    liB.classList.add('hidden')
    div.appendChild(li)
    div.appendChild(liB)
  } if (tab === 'blog') {
    const li = document.createElement('li')
    li.classList.add('hidden')
    li.innerHTML = 'Lessons Along the Way'
    div.appendChild(li)
  } if (tab === 'Programs') {
    let count = 0
    while (count <= 2) {
      const li = document.createElement('li')
      switch (count) {
        case 0:
          li.innerHTML = 'Patient Resources'
          count++
          li.classList.add('hidden')
          div.appendChild(li)
          break
        case 1:
          li.innerHTML = 'CareGiver Resources'
          count++
          li.classList.add('hidden')
          div.appendChild(li)
          break
        case 2:
          li.innerHTML = 'Funding Clinical Trials'
          li.classList.add('hidden')
          div.appendChild(li)
          count++
          break
      }
    }
  }
  nav.appendChild(div)
})
header.appendChild(nav)

buildHome()
