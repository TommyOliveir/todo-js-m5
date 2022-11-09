// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById("add-item-btn");
const container = document.getElementById("container");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

let storedlist = JSON.parse(localStorage.getItem("myList"));
let shoppingList = [];

if (storedlist) {
  shoppingList = storedlist;
}

console.log(storedlist);

function duplicatesNo() {
  const result = shoppingList.filter(
    (thing, index, self) =>
      index === self.findIndex((t) => t.itemInput === thing.itemInput)
  );
  console.log("no duplicates", result);
  return result;
}

// enter
itemInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    addItemBtn.click();
  }
});

// evenlistener

addItemBtn.addEventListener("click", function () {
  const randomID = Math.floor(Math.random() * 1000);

  // const result = shoppingList.filter(function(text) {
  //    return text.itemInput = itemInput.value
  // })

  console.log("shoppin array", shoppingList);
  // console.log("long", result);

  if (itemInput.value.length > 0) {
    console.log("my ra");

    shoppingList.push({
      itemInput: itemInput.value,
      id: randomID,
      quantity: 1,
    });
    shoppingList = duplicatesNo();
    render();
  }
  itemInput.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.delete) {
    handleDeleteClick(e.target.dataset.delete);
  } else if (e.target.dataset.addquantity) {
    handleAddQuantity(e.target.dataset.addquantity);
  } else if (e.target.dataset.minusquantity) {
    handleMinusQuantity(e.target.dataset.minusquantity);
  } else if (e.target.dataset.checkbox) {
    handleCheckbox(e.target.dataset.checkbox);
  }
});

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `
        <li class="list-item" id="list-li-${item.id}"> 
                <span>
                <input type="checkbox" id="checkbox-${item.id}" data-checkbox="${item.id}">
                    <label class="shop-item" for="checkbox-${item.id}">${item.itemInput}</label> 
                    <p id="quantity">Quantity <span class="number-quantity">${item.quantity}</span> </p>
               </span>
  
          
            <span class="flex">
                 <button data-minusquantity="${item.id}">-</button>
                <button data-addquantity="${item.id}">+</button>
                <button data-delete="${item.id}" >
                    <i class="fa-solid fa-trash" data-delete="${item.id}"></i>
                </button>  
            </span>

          
     
        </li>   `;
  }
  list.innerHTML = html;
  localStorage.setItem("myList", JSON.stringify(shoppingList));
}

render();

function handleDeleteClick(deleteThis) {
  console.log(deleteThis);
  console.log(shoppingList);
  const resultNotdeleted = shoppingList.filter(function (del) {
    return del.id != deleteThis;
  });
  shoppingList = resultNotdeleted;
  render();
  console.log("dont", resultNotdeleted);
}

function handleAddQuantity(addQuantity) {
  console.log(addQuantity);
  const addQuantityVar = shoppingList.filter(function (item) {
    return item.id == addQuantity;
  })[0];

  // console.log(addQuantityVar.itemInput)
  addQuantityVar.quantity += 1;
  render();
}

function handleMinusQuantity(minusQuantity) {
  console.log(minusQuantity);
  const addQuantityVar = shoppingList.filter(function (item) {
    return item.id == minusQuantity;
  })[0];

  // console.log(addQuantityVar.itemInput)
  addQuantityVar.quantity -= 1;
  if (addQuantityVar.quantity < 0) {
    addQuantityVar.quantity = 0;
  }
  render();
}

function handleCheckbox(checkboxid) {
  const checkedCheckbox = document.getElementById(
    `checkbox-${checkboxid}`
  ).checked;
  console.log(checkedCheckbox);
  //   console.log(checkboxid);
  if (checkedCheckbox) {
    console.log("check");
    document.getElementById(`list-li-${checkboxid}`).style.backgroundColor =
      "#dddddd";
  } else {
    console.log("no check");
    document.getElementById(`list-li-${checkboxid}`).style.backgroundColor = "";
  }
}

// const resultNotdeleted = currenttweetsData.filter(function (del) {
//     return del.uuid !== deleteID;
//   });
