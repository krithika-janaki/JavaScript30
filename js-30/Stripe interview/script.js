/*


Stripe provides a dashboard where users can view payments for their account. In this exercise, we will build a simplified view that displays a set of recent transactions.
 
To start, we are providing you with a list of transactions as follows:
 
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
];  
 
As you can see, each transaction is represented as an object with a customer field, amount field, and a unique id field.
In this example, negative amount values represent refunds where money is being returned to the customer.
 
Using the data provided above, display the transactions as an unordered list with the following format:
 
  • <customer>: <amount>

PART 2

Stripe Dashboard allows users to see their top customer, so they can easily identify them and make sure they are satisfied with their service. Using the data, write a function to find which customer has the highest total amount spent. Refunds are subtracted from the customer's total.
 
Next, we can highlight the top customer's name in the list. Give each occurrence of the top customer's name a yellow background, highlighting only the background behind their name and not the full row.
 
Note: Inline styles are acceptable for this exercise.
*/



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
  ]; 

  const ulWrapper = document.createElement('ul');

  document.body.append(ulWrapper);

    transactions.forEach((transaction) => {
      // const list = document.createElement('li');
      // list.append(`${transaction.customer} : ${transaction.amount}`);
      ulWrapper.innerHTML += `<li>${transaction.customer} : ${transaction.amount}</li>`
    });


    function topCustomer() {
      const formattedObj = {}
      transactions.forEach(({customer, amount}) => {
        if(formattedObj[customer] === undefined) {
          formattedObj[customer] = 0;
        }
        formattedObj[customer] += amount;
      });
      console.log(formattedObj)

      let sortedArray = Object.entries(formattedObj).sort((a, b) => {
        return b[1] - a[1];
      });
      return sortedArray[0][0];
    }

    console.log(topCustomer());

    const topCust = topCustomer();

    const all = document.querySelectorAll('li');

    all.forEach(ele => {
      if(ele.innerText.includes(topCust)) {
        let arr= ele.innerText.split(":");
        arr[0] = `<span style="background-color: yellow">${arr[0]}</span>`
        console.log(arr.join(" : "));

        arr.join(" : ")

        ele.innerHTML = `${arr.join(" : ")}`
      } 
    })









































































//   const formattedData = {};

//   const ulContainer = document.querySelector('ul');
//   transactions.forEach((transaction => {
//     ulContainer.innerHTML += 
//     `<li data-id=${transaction.id} data-customer-name="${transaction.customer}">
//     <span>${transaction.customer}</span>
//     <span>:</span>
//     <span> ${transaction.amount}</span>
//     </li>`
//   }));

//   console.log(Array.from(ulContainer.children));

//   transactions.forEach((transaction) => {
//     if(!formattedData[transaction.customer]) {
//         formattedData[transaction.customer] = {amount: 0, transactions: []}; 
//     }
//     formattedData[transaction.customer].amount += transaction.amount; 
//     formattedData[transaction.customer].transactions.push(transaction.id); 
//   });

//   function findTopCustomer() {
//     let max = 0;
//     let topCustomer;
//     for (const [key, value] of Object.entries(formattedData)) {
//         if(value.amount > max) {
//             console.log(value.amount)
//             max = value.amount;
//             topCustomer = key;
//         }
//       }
//       return topCustomer;
//   }
  
// const topCustomer = findTopCustomer();


// Array.from(ulContainer.children).forEach(listItem => {

//     if(listItem.innerText.includes(topCustomer)) {
//         console.log(Array.from(listItem.children)[0])
//         let modifiedCustomerName = "";
//         Array.from(listItem.children)[0].innerText.split(" ").forEach((name) => {
//             modifiedCustomerName += `<span style="background-color:yellow;">${name}</span> `
//         });
//         Array.from(listItem.children)[0].innerHTML = modifiedCustomerName;
//     }
// })