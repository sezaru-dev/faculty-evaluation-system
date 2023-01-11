const cat2NxtBtn = document.querySelector('#cat2NxtBtn');
const question7Radios = [...document.querySelectorAll('input[name="cat2q7"]')];
const question8Radios = [...document.querySelectorAll('input[name="cat2q8"]')];
const question9Radios = [...document.querySelectorAll('input[name="cat2q9"]')];
const question10Radios = [
	...document.querySelectorAll('input[name="cat2q10"]'),
];

let question7RadioIsChecked = false;
let question8RadioIsChecked = false;
let question9RadioIsChecked = false;
let question10RadioIsChecked = false;
let cat2IsAllRadioChecked;

question7Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question7Radios.length; i++) {
			question7Radios[i].checked && (question7RadioIsChecked = true);
		}
		//console.log(question7RadioIsChecked);
		category3Handler();
	};
});

question8Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question8Radios.length; i++) {
			question8Radios[i].checked && (question8RadioIsChecked = true);
		}
		//console.log(question8RadioIsChecked);
		category3Handler();
	};
});

question9Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question9Radios.length; i++) {
			question9Radios[i].checked && (question9RadioIsChecked = true);
		}
		//console.log(question9RadioIsChecked);
		category3Handler();
	};
});

question10Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question10Radios.length; i++) {
			question10Radios[i].checked && (question10RadioIsChecked = true);
		}
		//console.log(question10RadioIsChecked);
		category3Handler();
	};
});

const category3Handler = () => {
	if (
		question7RadioIsChecked &&
		question8RadioIsChecked &&
		question9RadioIsChecked &&
		question10RadioIsChecked
	) {
		//console.log('working');
		cat2IsAllRadioChecked = true;
	} else {
		//console.log('-1');
		cat2IsAllRadioChecked = false;
	}
};

function showCategory3() {
	category2.classList.add('hidden');
	category3.classList.remove('hidden');
}

cat2NxtBtn.onclick = (e) => {
	e.preventDefault();
	cat2IsAllRadioChecked && showCategory3();
	cat2IsAllRadioChecked && timeline3Active();
	cat2IsAllRadioChecked || callToastWarning();
};
