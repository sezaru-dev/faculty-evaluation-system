const question1Radios = [...document.querySelectorAll('input[name="cat1q1"]')];
const question2Radios = [...document.querySelectorAll('input[name="cat1q2"]')];
const question3Radios = [...document.querySelectorAll('input[name="cat1q3"]')];
const question4Radios = [...document.querySelectorAll('input[name="cat1q4"]')];
const question5Radios = [...document.querySelectorAll('input[name="cat1q5"]')];
const question6Radios = [...document.querySelectorAll('input[name="cat1q6"]')];
let question1RadioIsChecked = false;
let question2RadioIsChecked = false;
let question3RadioIsChecked = false;
let question4RadioIsChecked = false;
let question5RadioIsChecked = false;
let question6RadioIsChecked = false;
let category = document.querySelector('#category');
let evaluationTable = document.querySelector('#evaluationTable');
let isAllRadioChecked;

const nxtBtn = document.querySelector('#nxtBtn');
const mainRadio = document.querySelector('#mainRadio');
const on = document.querySelector('#on');

const qLists = [...document.querySelectorAll('.test')];

function allRadioChecked() {
	if (
		question1RadioIsChecked &&
		question2RadioIsChecked &&
		question3RadioIsChecked &&
		question4RadioIsChecked &&
		question5RadioIsChecked &&
		question6RadioIsChecked
	) {
		isAllRadioChecked = true;
		/* isAllRadioChecked && trybtn.setAttribute('href', 'EvaluationCat2.html');
		console.log('status checker working'); */
	} else {
		//console.log('status checker working - false');
	}
}

question1Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question1Radios.length; i++) {
			question1Radios[i].checked && (question1RadioIsChecked = true);
		}
		allRadioChecked();
		//console.log('q1 working');
	};
});

question2Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question2Radios.length; i++) {
			question2Radios[i].checked && (question2RadioIsChecked = true);
		}
		allRadioChecked();
		//console.log('q2 working');
	};
});

question3Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question3Radios.length; i++) {
			question3Radios[i].checked && (question3RadioIsChecked = true);
		}
		allRadioChecked();
		//console.log('q3 working');
	};
});

question4Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question4Radios.length; i++) {
			question4Radios[i].checked && (question4RadioIsChecked = true);
		}

		allRadioChecked();
		//console.log('working');
	};
});

question5Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question5Radios.length; i++) {
			question5Radios[i].checked && (question5RadioIsChecked = true);
		}
		allRadioChecked();
		//console.log('working');
	};
});

question6Radios.forEach((radiobtn) => {
	radiobtn.onclick = () => {
		for (let i = 0; i < question6Radios.length; i++) {
			question6Radios[i].checked && (question6RadioIsChecked = true);
		}
		allRadioChecked();
		console.log('working');
		/* console.log(trybtn); */
	};
});

const category1 = document.querySelector('#category1-container');
const category2 = document.querySelector('#category2-container');
const category3 = document.querySelector('#category3-container');
const remarksContainer = document.querySelector('#remarks-container');

function showCategory2() {
	category1.classList.add('hidden');
	category2.classList.remove('hidden');
}

nxtBtn.onclick = (e) => {
	e.preventDefault();
	//question6RadioIsChecked && displayCategoryTitle();
	isAllRadioChecked && showCategory2();
	isAllRadioChecked && timeline2Active();
	isAllRadioChecked || callToastWarning();
};
