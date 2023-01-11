const cat2PrevBtn = document.querySelector('#cat2PrevBtn');
const cat3PrevBtn = document.querySelector('#cat3PrevBtn');
const remarksPrevBtn = document.querySelector('#remarksPrevBtn');

cat2PrevBtn.onclick = (e) => {
	e.preventDefault();
	category1.classList.remove('hidden');
	category2.classList.add('hidden');
	timeline2Off();
};

cat3PrevBtn.onclick = (e) => {
	e.preventDefault();
	category2.classList.remove('hidden');
	category3.classList.add('hidden');
	timeline3off();
};

remarksPrevBtn.onclick = (e) => {
	e.preventDefault();
	category3.classList.remove('hidden');
	remarksContainer.classList.add('hidden');
	timelineRemarksoff();
};
