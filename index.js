// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const container = document.getElementById('container')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')



const shoppingList = []



    
addItemBtn.addEventListener('click', function(){
/*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it 
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/
        if(shoppingList.includes(itemInput.value)){
            console.log('no duplicates')
        }
        else{
            shoppingList.push(itemInput.value)
            render()        
        }
        itemInput.value = '' 
       
})

function render(){   
    const randomID = Math.floor(Math.random() * 1000)
   
    let html = ''
    for (let item of shoppingList){
        html += `<li class="list-item" >${item} <button id="${randomID}" onclick="deleteTask()">delete</button> </li>   `
    }
    list.innerHTML = html
}

render()

function deleteTask() {
container.addEventListener('click', function(e){
    console.log(e.target.id)
})
}


