const loginBtn = document.querySelector('#loginBtn');
const userType = document.querySelector('#userType');

loginBtn.onclick = (e) => {
	e.preventDefault();
	console.log(userType.value);
	if (userType.value == 'student') {
		window.location.href = './Student.html';
	} else {
		window.location.href = './dashboard.html';
	}
};
