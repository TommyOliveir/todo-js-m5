// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const container = document.getElementById('container')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')



let shoppingList = []


function duplicatesNo() {
    const result = shoppingList.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.itemInput === thing.itemInput
        ))
    )
    console.log("no duplicates", result)
    return result

}

// enter
itemInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();

        addItemBtn.click();
    }
});

addItemBtn.addEventListener('click', function () {


    const randomID = Math.floor(Math.random() * 1000)

    // const result = shoppingList.filter(function(text) {
    //    return text.itemInput = itemInput.value
    // })


    console.log(shoppingList);
    // console.log("long", result);


    if (shoppingList.includes(itemInput.value)) {
        console.log('no duplicates')
    }
    else {
        shoppingList.push({
            itemInput: itemInput.value,
            id: randomID,
            quantity: 1
        })
        shoppingList = duplicatesNo()
        render()
    }
    itemInput.value = ''


})


document.addEventListener("click", function (e) {
    if (e.target.dataset.delete) {
        handleDeleteClick(e.target.dataset.delete);
    }
    else if (e.target.dataset.quantity) {
        handleAddQuantity(e.target.dataset.quantity);
    }

})




function render() {

    let html = ''
    for (let item of shoppingList) {
        html += `
        <li class="list-item" > 
            <span>
                <p class="shop-item">${item.itemInput} </p> 
                <p id="quantity">Quantity <span class="number-quantity">${item.quantity}</span> </p>
            </span>
          
            <span>
          
                <button data-quantity="${item.id}">+</button>
                <button data-delete="${item.id}" >
                    <i class="fa-solid fa-trash" data-delete="${item.id}"></i>
                </button>  
            </span>

        
     
        </li>   `
    }
    list.innerHTML = html
}

render()

function handleDeleteClick(deleteThis) {
    console.log(deleteThis)
    console.log(shoppingList)
    const resultNotdeleted = shoppingList.filter(function (del) {

        return del.id != deleteThis;

    });
    shoppingList = resultNotdeleted
    render()
    console.log("dont", resultNotdeleted)
}

function handleAddQuantity(addQuantity) {
    console.log(addQuantity)
    const addQuantityVar = shoppingList.filter(function (item) {

        return item.id == addQuantity;

    })[0];

    // console.log(addQuantityVar.itemInput)
    addQuantityVar.quantity += 1
    render()
}

// const resultNotdeleted = currenttweetsData.filter(function (del) {
//     return del.uuid !== deleteID;
//   });