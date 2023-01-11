const darkToggle = document.querySelector('#dark-toggle');
let html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
	html.classList.toggle('dark');
});
