const cells = 31

// From 0.001 to 100
const items = [
  {name: 'Headphones', img: 'stikerQUEEN.png', chance: 4},
  {name: 'Headphones', img: 'dragonGLASSBABOCHKA.png', chance: 5},
  {name: 'Headphones', img: 'perchatumn.png', chance: 7},
  {name: 'Headphones', img: 'dualfiolete.png', chance: 15},
  {name: 'iPhone', img: 'vertelkyaFROZEN.png', chance: 20},
  {name: 'Headphones', img: 'otverkarjaviy.png', chance: 25},
  {name: 'Headphones', img: 'diskoCHARM.png', chance: 29},
  {name: 'Keyboard', img: 'dragonglssDEAGLE.png', chance: 55},
  {name: 'Headphones', img: 'akrfurrry.png', chance: 60},
  {name: 'Headphones', img: 'charmZAI2023.png', chance: 65},
]

function getItem() {
  let item;

  while (!item) {
    const chance = Math.floor(Math.random() * 100000)
    
    items.forEach(elm => {
      if (chance < elm.chance && !item) item = elm
    })
  }

  return item
}

function generateItems() {
  document.querySelector('.list').remove()
  document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
  `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem()
    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
  if (isStarted) return
  else isStarted = true

  if (!isFirstStart) generateItems()
  else isFirstStart = false
  const list = document.querySelector('.list')

  setTimeout(() => {
    list.style.left = '50%'
    list.style.transform = 'translate3d(-50%, 0, 0)'
  }, 0)

  const item = list.querySelectorAll('li')[15]

  list.addEventListener('transitionend', () => {
    isStarted = false
    item.classList.add('active')
    const data = JSON.parse(item.getAttribute('data-item'))
    
    console.log(data);
  }, {once: true})
}

let FPSCounter = 0
function FPSIncrementer() {
  FPSCounter++

  requestAnimationFrame(arguments.callee)
}; FPSIncrementer()

function FPSViewer() {
  document.querySelector('.FPS').innerHTML = FPSCounter * 2
  FPSCounter = 0

  setTimeout(arguments.callee, 500)
}; FPSViewer()