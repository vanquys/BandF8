		// gán
		const buyBtns = document.querySelectorAll('.js-buy-ticket')
		const modal = document.querySelector('.js-modal')
		const modalContainer = document.querySelector('.js-modal-container')
		const modalClose = document.querySelector('.js-modal-close') 		
		const modalPay = document.querySelector('.js-modal-pay')

		// hàm hiên thị
		function showBuyTickets() {
			modal.classList.add('open')
		}

		// hàm ẩn
		function hideBuyTickets() {
			modal.classList.remove('open')
		}

		function endTickets() {
			modal.classList.remove('open')
			alert("You don't monney :)) ")
		}

		// lặp qua từng thẻ và nghe hành vi click
		
		for ( const buyBtn of buyBtns) {
			buyBtn.addEventListener('click', showBuyTickets)
		}

		// nghe hành vi click
		modalClose.addEventListener('click', hideBuyTickets)

		modal.addEventListener('click', hideBuyTickets)

		modalContainer.addEventListener('click', function(event) {
			event.stopPropagation()
		})

		modalPay.addEventListener('click', hideBuyTickets)
		modalPay.addEventListener('click', endTickets)
	