import { menuArray } from '../js/data.js'

const main = document.getElementById('main-section')


menuArray.forEach(menuObject => {
    main.innerHTML += `
        <section class="foodItem">
            <div class="section-left">
                <img src="images/${menuObject.emoji}" alt="pizza">
                <div class="foodDetails">
                    <h3>${menuObject.name}</h3>
                    <p>${menuObject.ingredients}</p>
                    <span>$${menuObject.price}</span>
                </div>
            </div>
            <div class="section-right">
                <img class="add-button" src="images/add-button.png" alt="">
            </div>            
        </section> `
})

