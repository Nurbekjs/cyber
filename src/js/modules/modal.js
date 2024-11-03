function modal() {
	const cart_modal_box = document.getElementById('cart_modal_box')
	const openModal = document.getElementById('open_modal')
	const closeModal = document.getElementById('modal_close')

	openModal.addEventListener('click', () => {
		cart_modal_box.classList.add('active')
	})
	closeModal.addEventListener('click', () => {
		cart_modal_box.classList.remove('active')
	})
}
export default modal
