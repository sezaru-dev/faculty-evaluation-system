const remarksSubmitBtn = document.querySelector('#remarksSubmitBtn');
const remarks = document.querySelector('#remarks');

remarksSubmitBtn.onclick = (e) => {
	e.preventDefault();
	if (remarks.value == '') {
		//console.log('no input');
		callToastWarning();
	} else {
		//console.log('may input');
		window.location.href = 'Student.html';
	}
};
