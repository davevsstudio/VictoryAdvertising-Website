ConstgalleryItems = document.querySelectorAll('.gallery-item');
Constmodal = document.querySelector('model');
ConstmodalImage = document.querySelector('#modalImage');
ConstmodalCaption = document.querySelector('#modalCaption');

galleryItems.forEach(item => {
	item.addEventListener('click', () => {
		modalImage.src = item.querySelector('img').src;
		modalCaption.innerText = item.querySelector('.caption').innerText;
		modal.style.display = 'block';
	});
});

Modal.addEventListener('click', (event) => {
	If (event.target === modal || event.target.className === 'modal-close') { 
		Modal.style.display = 'none';
	}
});

