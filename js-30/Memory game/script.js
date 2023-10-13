
let slider = document.querySelector('input');
let difficulty = slider.value;

let gridLength = difficulty ** 2;

let gridContainer = document.createElement('div');
gridContainer.classList.add('grid');
gridContainer.style.gridTemplateColumns = `repeat(${difficulty}, 60px)`;
gridContainer.style.gridTemplateRows = `repeat(${difficulty}, 50px)`;

for(let i=0; i < gridLength; i++) {
    gridContainer.innerHTML += `<div data-id=${i} class="item">
    </div>`
}

document.body.append(gridContainer);

function generateRandomItems() {
    let arr = [];

    while(arr.length < 5) {
        const rand = Math.floor(Math.random() * gridLength);
        if(arr.includes(rand)) {
         continue;
        }
        arr.push(rand);
    }

  return arr;
}
const items = document.querySelectorAll('.item');
let randomArr = generateRandomItems();
async function showItems() {
    for (let ele of randomArr) {
        items[ele].style.backgroundColor = "blue";
    }

    await new Promise((resolve) => {
        console.log('waits here')
        setTimeout(() => {
            resolve();
        }, 5000)
    });

    for (let ele of randomArr) {
        items[ele].style.removeProperty('background-color')
    }
}

showItems();
let count = 0;
function handleItemClick() {

    console.log({randomArr})
    if(randomArr.includes(Number(this.dataset.id))) {
        this.style.backgroundColor = "red"
        count++;
        if(count === randomArr.length) {
            console.log('YAYYY')
            return;
        } 
    }
}



items.forEach(item => item.addEventListener('click', handleItemClick, {
    once: true
}));