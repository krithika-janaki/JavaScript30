let food = getRandomFoodPosition();

function getRandomFoodPosition() {
    let x = Math.floor(Math.random() * 21) + 1;
    let y = Math.floor(Math.random() * 21) + 1;
    return {x, y}
}

export function drawFood(gameBoard) {
    const foodELement = document.createElement('div');
let food = getRandomFoodPosition();
    foodELement.style.gridRowStart = food.y;
    foodELement.style.gridRowStart = food.x;
    foodELement.style.backgroundColor ="yellow";
    gameBoard.append(foodELement);
}


export function updateFood() {
    if()
}