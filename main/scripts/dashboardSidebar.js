const dashboardContents = [...document.querySelectorAll('.dashboard-content')];
const sidebarList = [...document.querySelectorAll('.sidebarLi')];
const contentElement = document.querySelector('#contentElement');
const contentTitles = [
	'Dashboard',
	'Set Evaluation',
	'Subject',
	'Instructor',
	'Student',
	'Class',
	'Evaluations',
	'Average Weighted Mean',
	'Accounts',
];
let sidebarListId = [];

for (let i = 0; i < sidebarList.length; i++) {
	sidebarListId.push(`${sidebarList[i].id}`);
}

function sidebarLiHide() {
	sidebarList.forEach((li) => {
		li.classList.remove('activeSidebar');
	});
}

function contentHide() {
	dashboardContents.forEach((content) => {
		content.classList.add('hidden');
	});
}

console.log(sidebarListId);

sidebarListId.forEach((liId) => {
	document.querySelector(`#${liId}`).onclick = () => {
		sidebarLiHide();
		document.querySelector(`#${liId}`).classList.add('activeSidebar');
		/* to hide and display contents */
		let liIndex = sidebarListId.indexOf(`${liId}`);
		let contentIndex = dashboardContents[liIndex];
		contentHide();
		contentIndex.classList.remove('hidden');
		//console.log(contentIndex);
		/* change h1 text */
		contentElement.innerHTML = `${contentTitles[liIndex]}`;
	};
});

const sidebarOpen = document.querySelector('#sidebar-open');
const dasboardLeftSidebar = document.querySelector('.dasboard-leftSidebar');
const sidebarOverlay = document.querySelector('#sidebarOverlay');
const sidebarClose = document.querySelector('#sidebar-close');
const sidebarTitle = document.querySelector('#sidebarTitle');

sidebarOpen.onclick = () => {
	dasboardLeftSidebar.classList.remove('hidden');
	sidebarOverlay.classList.remove('hidden');
	sidebarTitle.innerHTML = 'FES';
};

sidebarClose.onclick = () => {
	dasboardLeftSidebar.classList.add('hidden');
	sidebarOverlay.classList.add('hidden');
	sidebarTitle.innerHTML = 'Faculty Evaluation System';
};
sidebarOverlay.onclick = () => {
	dasboardLeftSidebar.classList.add('hidden');
	sidebarOverlay.classList.add('hidden');
	sidebarTitle.innerHTML = 'Faculty Evaluation System';
};
