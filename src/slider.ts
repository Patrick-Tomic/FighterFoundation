import mural from './mural.jpg'
import race from './race.jpg'
import { hope } from './hope.jpeg'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function buildImageSlider () {
  const heading = [mural, race, hope]
  const slider = document.createElement('div')
  slider.classList.add('imgSlider')
  const wrap = document.createElement('div')
  wrap.classList.add('sliderWrap')
  for (let i = 0; i < heading.length; i++) {
    const image = document.createElement('img')
    image.src = heading[i]
    slider.appendChild(image)
  }
  let count = 0
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const interval = setInterval(() => {
    let vw = 26
    if (count === -3) {
      count = 0
      vw = vw * count
      slider.style.transition = 'none'
      slider.style.transform = `translateX(${vw}vw)`
    } else {
      count--
      vw = vw * count
      slider.style.transform = `translateX(${vw}vw)`
      slider.style.transition = 'transform 1s ease-in-out'
    }
  }, 5000)
  wrap.appendChild(slider)
  return wrap
}
