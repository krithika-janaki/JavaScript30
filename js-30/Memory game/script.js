
// let slider = document.querySelector('input');
// let difficulty = slider.value;

// let gridLength = difficulty ** 2;

// let gridContainer = document.createElement('div');
// gridContainer.classList.add('grid');
// gridContainer.style.gridTemplateColumns = `repeat(${difficulty}, 60px)`;
// gridContainer.style.gridTemplateRows = `repeat(${difficulty}, 50px)`;

// for(let i=0; i < gridLength; i++) {
//     gridContainer.innerHTML += `<div data-id=${i} class="item">
//     </div>`
// }

// document.body.append(gridContainer);

// function generateRandomItems() {
//     let arr = [];

//     while(arr.length < 5) {
//         const rand = Math.floor(Math.random() * gridLength);
//         if(arr.includes(rand)) {
//          continue;
//         }
//         arr.push(rand);
//     }

//   return arr;
// }
// const items = document.querySelectorAll('.item');
// let randomArr = generateRandomItems();
// async function showItems() {
//     for (let ele of randomArr) {
//         items[ele].style.backgroundColor = "blue";
//     }

//     await new Promise((resolve) => {
//         console.log('waits here')
//         setTimeout(() => {
//             resolve();
//         }, 5000)
//     });

//     for (let ele of randomArr) {
//         items[ele].style.removeProperty('background-color')
//     }
// }

// showItems();
// let count = 0;
// function handleItemClick() {

//     console.log({randomArr})
//     if(randomArr.includes(Number(this.dataset.id))) {
//         this.style.backgroundColor = "red"
//         count++;
//         if(count === randomArr.length) {
//             console.log('YAYYY')
//             return;
//         } 
//     }
// }



// items.forEach(item => item.addEventListener('click', handleItemClick, {
//     once: true
// }));

const rangeInput = document.querySelector('input');
const totalGridLength = rangeInput.value**2;

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid');
gridContainer.style.gridTemplateColumns = `repeat(${rangeInput.value}, 60px)`;
gridContainer.style.gridTemplateRows = `repeat(${rangeInput.value}, 60px)`;

for(let i=0; i < totalGridLength; i++) {
    const gridItem = document.createElement('div');
    gridItem.dataset.id = i;
    gridItem.classList.add('item');
    gridContainer.append(gridItem);
    //     gridContainer.innerHTML += `<div data-id=${i} class="item">
    // </div>`
}
document.body.append(gridContainer);

function generateRandomItems(num) {

    let arr = [];

    while(arr.length < 5) {
        const randItem = Math.floor(Math.random() * totalGridLength);
        if(arr.includes(randItem)) {
            continue;
        }
        arr.push(randItem);
    } 
   return arr;
}
const randomItems = generateRandomItems(5)
console.log(generateRandomItems(5))
const listItems = document.querySelectorAll('.item');

for(let num of randomItems) {
    listItems[num].style.backgroundColor = 'red';
}



function removeBackground() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('inside this promise')
            // for(let num of randomItems) {
            //     console.log('in this sett time')
            //     listItems[num].style.removeProperty('background-color');
            // }
            resolve();
        }, 5000)
    });


}
removeBackground().then(() => {

    console.log(' now remove background')
     for(let num of randomItems) {
                console.log('in this sett time')
                listItems[num].style.removeProperty('background-color');
            }
});
console.log('blah blah')

function handleClick(e) {
    console.log('this', this)
if(randomItems.includes(Number(this.dataset.id))) {
    this.style.backgroundColor = 'green';
} else {
    this.style.backgroundColor = 'yellow';
}
}

listItems.forEach((item) => {
    item.addEventListener('click', handleClick, {
        once: true
    })
})

function handleIn() {
console.log('this', this)
}

listItems[3].addEventListener('click', handleIn);

