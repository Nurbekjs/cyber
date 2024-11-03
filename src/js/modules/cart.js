import cart_status from './cart_status.js'
import calcCart from './calcCart.js'
const cartWrapper = document.querySelector('.cartWrapper')

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const cart = event.target.closest('.card')

		const cardInfo = {
			id: cart.dataset.id,
			imgSrc: cart.querySelector('.card__picture').getAttribute('src'),
			title: cart.querySelector('.card__title').innerText,
			price: cart.querySelector('.card__price').innerText,
		}
		const ItemInCart = cartWrapper.querySelector(`[data-id="${cardInfo.id}"]`)
		if (ItemInCart) {
			const counterEl = ItemInCart.querySelector('[data-counter]')
			counterEl.innerText = ++counterEl.innerText
		} else {
			const cartItemHTML = `<div class="cart_item" data-id="${cardInfo.id}">
                                    <div class="cart_item_img"><img src="${cardInfo.imgSrc}" alt="Airpods Max"></div>
                                    <div class="cart_item_desc">
                                        <h2 class="items__desc">${cardInfo.title}</h2>
                                        
                                    </div>
                                    <div class="cart_item_counter">
                                        <div class="items_control" data-action="minus">-</div>
                                        <div class="items_current" data-counter>1</div>
                                        <div class="items_control" data-action="plus">+</div>
                                    </div>
                                    <div class="cart_item_price">${cardInfo.price}</div>
                                    
                                    <div class="cart_item_remove" ><i class="fa-solid fa-xmark" data-remove></i></div>
                                </div>`
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
		}
	}
})

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-remove')) {
		const cart = event.target.closest('.cart_item').remove()
	}
	cart_status()
	calcCart()
})
