const cells = 31

// From 0.001 to 100
const items = [
//   {name: 'Headphones', img: 'GOLDK.png', chance: 2},
//   {name: 'Headphones', img: 'skul.png', chance: 2.1},
//   {name: 'Headphones', img: 'TRAWM.png', chance: 2.3},
//   {name: 'Headphones', img: 'm9molniya.png', chance: 2},
//   {name: 'Headphones', img: 'm9rjav.png', chance: 3.5},
//   {name: 'Headphones', img: 'retroperch.png', chance: 5},
//   {name: 'iPhone', img: 'blackVbab.png', chance: 7},
//   {name: 'Headphones', img: 'scrkaram.png', chance: 11},
//   {name: 'Headphones', img: 'luxury.png', chance: 15},
//   {name: 'Keyboard', img: 'jaws.png', chance: 25},
//   {name: 'Headphones', img: 'orochi.png', chance: 50},
//   {name: 'Headphones', img: 'CARBON.png', chance: 55}
    {name: 'Headphones', img: 'skul.png', chance: 2},
    {name: 'Headphones', img: 'GOLDK.png', chance: 2.1},
    {name: 'Headphones', img: 'TRAWM.png', chance: 2.3},
    {name: 'Headphones', img: 'm9molniya.png', chance: 2},
    {name: 'Headphones', img: 'm9rjav.png', chance: 3.5},
    {name: 'Headphones', img: 'retroperch.png', chance: 5},
    {name: 'iPhone', img: 'orangPERCH', chance: 6},
    {name: 'Headphones', img: 'scrkaram.png', chance: 7},
    {name: 'Headphones', img: 'luxury.png', chance: 13},
    {name: 'Keyboard', img: 'jaws.png', chance: 15},
    {name: 'Headphones', img: 'orochi.png', chance: 35},
    {name: 'Headphones', img: 'CARBON.png', chance: 45}
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