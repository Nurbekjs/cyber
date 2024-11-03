let cartAmount = 0
function cart_status() {
	const cartWrapper = document.querySelector('.cartWrapper')
	const cartEmpty = document.querySelector('[data-cart-empty]')
	const orderForm = document.querySelector('#order_form')
	// const cartItemsAmount = document.querySelector('#cart_amount')
	if (cartWrapper.children.length > 0) {
		cartEmpty.classList.add('none')
		orderForm.classList.remove('none')
		cartAmount = cartWrapper.children.length
		// cartItemsAmount.innerText = cartAmount
	} else {
		cartEmpty.classList.remove('none')
		orderForm.classList.add('none')
		// cartItemsAmount.innerText = 0
	}
}
export default cart_status
