const transactions = [
    {id: 't_01', customer: 'Rose Roberts', amount: 84},
    {id: 't_02', customer: 'Chris Cook', amount: 30},
    {id: 't_03', customer: 'Mary Martin', amount: 42},
    {id: 't_04', customer: 'Susan Smith', amount: 26},
    {id: 't_05', customer: 'Rose Roberts', amount: -84},
    {id: 't_06', customer: 'Rose Roberts', amount: 48},
    {id: 't_07', customer: 'Susan Smith', amount: 104},
    {id: 't_08', customer: 'Larry Lewis', amount: 140},
    {id: 't_09', customer: 'Mary Martin', amount: 10},
    {id: 't_10', customer: 'Chris Cook', amount: 60},
    {id: 't_11', customer: 'Susan Smith', amount: -26},
    {id: 't_12', customer: 'Larry Lewis', amount: -140},
    {id: 't_13', customer: 'Rose Roberts', amount: 26},
    {id: 't_14', customer: 'Ryan Roberts', amount: 44},
    {id: 't_15', customer: 'e:', amount: 200},
  ];  

const listContainer = document.querySelector('ul');
const formattedTransactions = {};

transactions.forEach(transaction => {
    if(formattedTransactions[transaction.customer] === undefined) {
        formattedTransactions[transaction.customer] = 0;
    }

    formattedTransactions[transaction.customer] += transaction.amount;

    const listItem = document.createElement('li');
    listItem.textContent = `${transaction.customer} : ${transaction.amount}`;
    listContainer.append(listItem);
})

console.log(Object.entries(formattedTransactions))

const sortedTransactions = Object.entries(formattedTransactions).sort((a,b) => {
   return b[1] - a[1]
})
const topCustomer = sortedTransactions[0][0];

// highlight top customer

const listItems = document.querySelectorAll('li');
ryan : roberts :

listItems.forEach(item => {
    let custName;
    const name = item.textContent;

    console.log(name)
    for(let i = name.length -1; i >= 0; i--) {
        if(name[i] === ':') {
            custName = name.slice(0, i);
            console.log(custName)
            break;
        }
    }

    console.log(custName.trim().toLocaleLowerCase())
    console.log(topCustomer.trim().toLocaleLowerCase())

    if(custName.trim().toLocaleLowerCase() === topCustomer.toLocaleLowerCase().trim()) {
        const customerAmount = formattedTransactions[custName.trim()];
        console.log(custName);

        item.innerHTML = `<span class='hl'>${name[0]}</span> : ${customerAmount}`

    }
})



