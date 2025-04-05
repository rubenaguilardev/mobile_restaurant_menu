import { menuArray } from '../js/data.js'

const main = document.getElementById('foodItem')


menuArray.forEach(menuObject => {
    main.innerHTML += `
        <section class="foodItem">
            <div class="foodItem-left">
                <img class="food-item-image" src="images/${menuObject.emoji}" alt="pizza">
                <div class="foodDetails">
                    <h3>${menuObject.name}</h3>
                    <p>${menuObject.ingredients}</p>
                    <span>$${menuObject.price}</span>
                </div>
            </div>
            <div class="foodItem-right">
                <img class="add-button" src="images/add-button.png" alt="">
            </div>            
        </section> `
})

