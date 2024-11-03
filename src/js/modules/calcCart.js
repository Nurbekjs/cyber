function calcCart() {
	const cartItems = document.querySelectorAll('.cart_item')
	const totalPriceEl = document.querySelector('.total_price')
	const totalItemsEl = document.querySelector('#cart_amount')
	let totalPrice = 0
	let totalItems = 0
	cartItems.forEach(function (item) {
		const amountEl = item.querySelector('[data-counter]')
		const priceEl = item.querySelector('.cart_item_price')

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
		totalPrice += currentPrice
		const currentCount = parseInt(amountEl.innerText)
		totalItems += currentCount
	})
	totalPriceEl.innerText = totalPrice
	totalItemsEl.innerText = totalItems
}
export default calcCart
