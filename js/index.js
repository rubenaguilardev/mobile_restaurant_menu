import { menuArray } from '../js/data.js'

const main = document.getElementById('foodItem')
const orderSection = document.getElementById('order-section')
const price = document.getElementById('price-span')
const checkout = document.getElementById('checkout-btn')
const paymentPopup = document.querySelector('.payment-popup')
const paymentForm = document.querySelector('.payment-form')



let newPrice = 0
const foodItems = []


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

    if (e.target.id === 'checkout-btn') {

        completeOrder()
    }

    else if (e.target.id === 'close-btn') {

        backToOrder()
    }
    
    else if (e.target.id) {  
        
        addItem(e.target.id)
        
        document.getElementById('order').style.display = 'block'
        document.getElementById(`item-${e.target.id}`).style.display = 'flex'
    }

    else if (e.target.dataset.remove) {

        removeOnClick(e.target.dataset.remove)    
    }
   
}

paymentForm.addEventListener('submit', checkoutOrder)



function addItem(id) {
    document.querySelector('.order-placed').style.display = 'none'
    menuArray[id].quantity++
    if (foodItems.includes(id)) {
        quantityIncrease(id)
    }
    else {
        orderSection.innerHTML += `
        <div class="order-info" id="item-${menuArray[id].id}">
            <div class="order-left">
                <h3 class="order-item" {data-item="${menuArray[id].id}">${menuArray[id].name}</h3>
                <div class="order-quantity">
                    <h4 id="quantityIncease${id}">Quantity: ${menuArray[id].quantity}</h4>
                    <span class="remove-span" data-remove="${menuArray[id].id}">remove</span>
                </div>
            </div>
            <span class="order-span">$${menuArray[id].price}</span>
        </div>`
        quantityIncrease(id)
        foodItems.push(id)
    }
    
    
    
    priceIncrease(id)
}





function removeOnClick(id) {
    if (menuArray[id].quantity > 0) {
        priceDecrease(id)
        quantityDecrease(id)
        if (menuArray[id].quantity === 0) {
            document.getElementById(`item-${id}`).style.display = 'none'
        }
    } 

    if (newPrice === 0) {
        document.querySelector('#order').style.display = 'none'
    }  
}
    



function priceIncrease(id) {
    newPrice += menuArray[id].price
    price.textContent = `$${newPrice}`
}


function priceDecrease(id) {
    newPrice -= menuArray[id].price
    price.textContent = `$${newPrice}`
}


function quantityIncrease(id) {
    const quantity = document.getElementById(`quantityIncease${id}`)
    quantity.textContent = `Quantity: ${menuArray[id].quantity}`
}

function quantityDecrease(id) {
    const quantity = document.getElementById(`quantityIncease${id}`)
    menuArray[id].quantity--
    quantity.textContent = `Quantity: ${menuArray[id].quantity}`
    
}


function completeOrder() {
    if (newPrice > 0) {
        paymentPopup.style.display = 'block'
        main.style.backgroundImage = 'linear-gradient(gray, white)'  
    }
   
}


function backToOrder() {
    paymentPopup.style.display = 'none'
    main.style.backgroundImage = 'none'
    checkout.style.backgroundColor = '#16DB99'
}



function checkoutOrder(e) {
    const ids = [0, 1, 2]
    e.preventDefault()
    const paymentFormData = new FormData(paymentForm)
    const name = paymentFormData.get('full-name')
    document.getElementById('order').style.display = 'none'
    main.style.backgroundImage = 'none'
    paymentPopup.style.display = 'none'
    document.getElementById('confirmation-p').textContent = `Thanks, ${name}! Your order is on its way`
    document.querySelector('.order-placed').style.display = 'flex'
    menuArray.forEach(item => {
        item.quantity = 0
        
    })
    ids.forEach(id => {
        document.getElementById(`item-${id}`).style.display = 'none'
    })
    newPrice = 0
    
}





