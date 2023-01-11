const closeToast = document.querySelector('#closeToast');
const warningToast = document.querySelector('#warning-toast');
let toastTimer = 2500;
let isToastWarningOn = false;

function callToastWarning() {
	warningToast.classList.remove('hidden');
	isToastWarningOn = true;
	autoHideToast();
}

function autoHideToast() {
	if (isToastWarningOn == true) {
		setTimeout(() => {
			warningToast.classList.add('hidden');
		}, toastTimer);
		isToastWarningOn = false;
	}
}
