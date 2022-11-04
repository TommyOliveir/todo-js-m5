// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const container = document.getElementById('container')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')



let shoppingList = []


function duplicatesNo(){
    const result = shoppingList.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.itemInput === thing.itemInput 
    ))
  )
  console.log("no duplicates", result)
  return result
 
}

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
            id: randomID
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

})




function render() {


    let html = ''
    for (let item of shoppingList) {
        html += `<li class="list-item" >${item.itemInput} <button data-delete="${item.id}">delete</button> </li>   `
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


// const resultNotdeleted = currenttweetsData.filter(function (del) {
//     return del.uuid !== deleteID;
//   });