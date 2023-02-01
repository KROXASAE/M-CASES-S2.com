const cells = 31

// From 0.001 to 100
const items = [
  {name: 'Headphones', img: 'chpok.png', chance: 1.3},
  {name: 'Headphones', img: 'm92.png', chance: 2},
  {name: 'Headphones', img: 'm91.png', chance: 3},
  {name: 'Headphones', img: 'm93.png', chance: 4},
  {name: 'iPhone', img: 'm9rjav.png', chance: 4.5},
  {name: 'Headphones', img: 'TRAKR.png', chance: 8.5},
  {name: 'Headphones', img: 'krasniyM16.png', chance: 12.9},
  {name: 'Keyboard', img: 'rail.png', chance: 20},
  {name: 'Headphones', img: 'necrm4.png', chance: 25},
  {name: 'Headphones', img: 'neon.png', chance: 40},
  {name: 'Headphones', img: 'ghoul.png', chance: 50},
  {name: 'Headphones', img: 'drobDEREVO.png', chance: 59}
//   krasniyM16.png
//   drobDEREVO.png
//   m92.png
//   m93.png
//   m91.png
//   neonpng
//   ghoul.png
//   railpns
//   necrm4png
//   m9rjav
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