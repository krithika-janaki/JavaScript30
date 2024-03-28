const current = new Date();
const month = current.getMonth();
const day = current.getDate();


const nextButton = document.querySelector(".next");

nextButton.addEventListener('click', function() {
    const nextMonth = (month === 11) ? 0 : month+1;
    const year = (month === 11) ? current.getFullYear+1 : current.getFullYear();
})

const totalDaysOfMonth = new Date(current.getFullYear(), month+1, 0).getDate();

const firstDayOfMonth = new Date(current.getFullYear(), month, 1).getDay();
const tableBody = document.querySelector('tbody');

console.log({firstDayOfMonth, totalDaysOfMonth})
let dayNumber = 1;

for(let i=0; i < 6; i++) {
    const row = document.createElement("tr");

    for(let j=0; j < 7; j++) {
        const cell = document.createElement("td");

        if(i===0 && j < firstDayOfMonth) {
            cell.innerText = "";
            row.append(cell);
        } else if(dayNumber < totalDaysOfMonth) {
            cell.innerText = dayNumber;
            row.append(cell);
            dayNumber++;
        }  else if (dayNumber > totalDaysOfMonth) {
            break;
        }


     tableBody.append(row);
    }


}

