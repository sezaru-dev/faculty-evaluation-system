const cat3NxtBtn = document.querySelector('#cat3NxtBtn');
const question11Radios = [
	...document.querySelectorAll('input[name="cat3q11"]'),
];
const question12Radios = [
	...document.querySelectorAll('input[name="cat3q12"]'),
];
const question13Radios = [
	...document.querySelectorAll('input[name="cat3q13"]'),
];

let question11RadioIsChecked = false;
let question12RadioIsChecked = false;
let question13RadioIsChecked = false;
let cat3IsAllRadioChecked;

console.log(question11Radios);

question11Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question11Radios.length; i++) {
			question11Radios[i].checked && (question11RadioIsChecked = true);
		}
		cat3AllRadioChecked();
		//console.log(question11RadioIsChecked);
	};
});

question12Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question12Radios.length; i++) {
			question12Radios[i].checked && (question12RadioIsChecked = true);
		}
		cat3AllRadioChecked();
		//console.log(question12RadioIsChecked);
	};
});

question13Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question13Radios.length; i++) {
			question13Radios[i].checked && (question13RadioIsChecked = true);
		}
		cat3AllRadioChecked();
		//console.log(question13RadioIsChecked);
	};
});

function cat3AllRadioChecked() {
	if (
		question11RadioIsChecked &&
		question12RadioIsChecked &&
		question13RadioIsChecked
	) {
		cat3IsAllRadioChecked = true;
	} else {
		//console.log('all radio checked - false');
	}
}

function showRemarks() {
	category3.classList.add('hidden');
	remarksContainer.classList.remove('hidden');
}

cat3NxtBtn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(cat3IsAllRadioChecked);
	cat3IsAllRadioChecked && showRemarks();
	cat3IsAllRadioChecked && timelineRemarksActive();
	cat3IsAllRadioChecked || callToastWarning();
});
