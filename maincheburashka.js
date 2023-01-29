const cells = 31

// From 0.001 to 100
const items = [
  {name: 'Headphones', img: 'AWMSPORT.png', chance: 4},
  {name: 'Headphones', img: 'otverkaHOT.png', chance: 7},
  {name: 'Headphones', img: 'CRUNGE.png', chance: 10},
  {name: 'Headphones', img: 'CHAMPION.png', chance: 15},
  {name: 'iPhone', img: 'CHGOLD.png', chance: 20},
  {name: 'Headphones', img: 'CARBON.png', chance: 25},
  {name: 'Headphones', img: 'RALLYP.png', chance: 29},
  {name: 'Keyboard', img: 'PISEC.png', chance: 50},
  {name: 'Headphones', img: 'RAYUSP.png', chance: 55},
  {name: 'Headphones', img: 'AWMMASTERS.png', chance: 60},
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