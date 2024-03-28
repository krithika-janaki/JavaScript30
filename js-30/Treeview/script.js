// const bodyEl = document.querySelector("ul");
// console.log("dsfd", bodyEl);
// function formHTML(element) {
//   const el = document.createElement("li");

//   if (element.children && element.children.length) {
//     const spanEle = document.createElement("span");
//     spanEle.classList.add("caret");
//     spanEle.textContent = element.name;
//     el.append(spanEle);
//     const ulNested = document.createElement("ul");
//     ulNested.classList.add("nested");
//     for (let i = 0; i < element.children.length; i++) {
//       const child = element.children[i];
//       ulNested.append(formHTML(child));
//     }
//     el.append(ulNested);
//   } else {
//     el.textContent = element.name;
//   }
//   return el;
// }

// const jsonObj = {
//   name: "a",
//   children: [
//     {
//       name: "b",
//     },
//     {
//       name: "c",
//     },
//   ],
// };

// document.body.append(formHTML(jsonObj));
// console.log(document.body);

// const nestedParents = document.querySelectorAll(".caret");

// function handleClick(e) {
//   console.log("inside handle click", document.body);
//   const nestedChild = this.parentElement.querySelector(".nested");
//   nestedChild.classList.toggle("active");
// }

// for (let i = 0; i < nestedParents.length; i++) {
//   console.log(nestedParents[i].parentElement);
//   nestedParents[i].addEventListener("click", handleClick);
// }


/***************************************************************/
let bodyEl = document.querySelector("ul");

const jsonObj = {
  name: "A",
  children: [
    {
      name: "B",
    },
    {
      name: "C"
    },
    {
      name: "D",
      children: [
        {
          name: "E",
          children: [
            {
              name: "G"
            }
          ]
        }
      ]
    }
  ]
}

function displayNestedTree(obj) {
    const liItem = document.createElement('li');

    if(obj.children) {
      const nestedUl = document.createElement('ul');
      const caret = document.createElement('span');
      const elementName = document.createElement('span');

      caret.id ='caret';
      caret.classList.add('caret');
      caret.textContent = `<`;

      elementName.textContent = obj.name;

      liItem.append(caret);
      liItem.append(elementName);

      for(let child of obj.children) {
        nestedUl.append(displayNestedTree(child))
      }
      liItem.append(nestedUl);

    } else {
      liItem.textContent = obj.name
    }
    return liItem;
  }

  function handleClick(e) {
    console.log(e);
      console.log("inside handle click", document.body);
  const nestedChild = this.parentElement.querySelector(".nested");
  nestedChild.classList.toggle("active");
  }

bodyEl.append(displayNestedTree(jsonObj));

let nestedItems = document.querySelectorAll('#caret');

console.log(nestedItems)



nestedItems.forEach((item) => {
  item.addEventListener('click', handleClick)
})


