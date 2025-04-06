import { menuArray } from '../js/data.js'

const main = document.getElementById('foodItem')
const orderSection = document.getElementById('order-section')
const price = document.getElementById('price-span')
const checkout = document.getElementById('checkout-btn')

let newPrice = 0


menuArray.forEach(menuObject => {

    main.innerHTML += `
        <section class="foodItem">
            <div class="foodItem-left">
                <img class="food-item-image" src="images/${menuObject.emoji}" alt="${menuObject.name}">
                <div class="foodDetails">
                    <h3>${menuObject.name}</h3>
                    <p>${menuObject.ingredients}</p>
                    <span>$${menuObject.price}</span>
                </div>
            </div>
            <div class="foodItem-right">
                <img id="${menuObject.id}" class="add-button" src="images/add-button.png" alt="button">
            </div>            
        </section> `
})

document.addEventListener('click', handleOnClick)


function handleOnClick(e) {  

    const id = e.target.id
    
    if (id) {
        document.getElementById('order').style.display = 'block'      
        orderSection.innerHTML += `
            <div class="order-info" data-id="${menuArray[id].id}">
                <div class="order-left">
                    <h3 class="order-item">${menuArray[id].name}</h3>
                    <span class="remove-span" data-remove="${menuArray[id].id}">remove</span>
                </div>
                <span class="order-span">$${menuArray[id].price}</span>
            </div>`
        priceIncrease(id)
        
    }
}


function priceIncrease(id) {
    newPrice += menuArray[id].price
    price.textContent = `$${newPrice}`
}





