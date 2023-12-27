/* eslint-disable @typescript-eslint/explicit-function-return-type */
import buildImageSlider from './slider'
export default function buildHome () {
  const main: any = document.querySelector('main')
  const whoisFighter = document.createElement('h1')
  main.appendChild(buildImageSlider())
  whoisFighter.innerHTML = 'Who is a Fighter?'
  const fighterDiv = document.createElement('div')
  fighterDiv.appendChild(whoisFighter)
  const fighterP = document.createElement('p')
  fighterP.innerHTML = 'A fighter does not inspire because they have cancer, but a fighter inspires because of the character with which they fight it. A fighter faces challenges with unwavering positibity and relentless hope - hope that they might take every opportunity to make a difference in this world. They fight for love, for family, for life. Fight on!'
  fighterDiv.appendChild(fighterP)
  main.appendChild(fighterDiv)
  const michelleDiv = document.createElement('div')
  michelleDiv.classList.add('aboutMichelle')
  const aboutMichelle = document.createElement('p')
  aboutMichelle.innerHTML = 'On March 14th, 2014 Michelle Boyd DeJong was diagnosed with an inoperable brain tumor. The tumor was located on her brain stem and its position was blocking the normal circulation of cerebral brain fluid, which resulted in pooling and increased pressure<br><br> An endoscopic ventriculostomy and biopsy was performed on march 17th, followed by the insertion of a left ventriculoperitoneal shunt on March 27th; having a subsequent revision on June 23rd. <br><br> Released from Moffitt Cancer Center the day after her shunt surgery, she made a quick recovery and promptly sneaked out to have her forearm tattooed with our "fighter" logo. The prescribed 42 days of chemotherapy and 33 radiation treatments started on April 16th.<br><br>During the week between brain surgeries Michelle realized that there was only one way to face this challenge and it was the same way she approached life: with a positive and selfless attitude focused on using her experiences to help others. The "fighter" mentality that she embodied is so much more than a battle against her brain tumor; more importantly, it is a daily initiative to inspire others through action and attitude. This begins with a personal conscious decision and ends with changing lives.'
  const michelleHeading = document.createElement('h1')
  michelleHeading.innerHTML = 'Who is Michelle?'
  michelleDiv.appendChild(michelleHeading)
  michelleDiv.appendChild(aboutMichelle)
  main.appendChild(michelleDiv)
  const FFObjectives = document.createElement('div')
  const FFObjHead = document.createElement('h1')
  FFObjHead.innerHTML = 'Fighter Foundation Objectives'
  const FFPara = document.createElement('ul')
  const objectives = ['Funding and Advocating for Brain Tumor Research', 'Promoting Brain Tumor Awareness', 'Brain Tumor Patient and Caregiver Support', 'Community Volunteer Events']
  objectives.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = item
    FFPara.appendChild(li)
  })
  FFObjectives.appendChild(FFObjHead)
  FFObjectives.appendChild(FFPara)
  main.appendChild(FFObjectives)
}
