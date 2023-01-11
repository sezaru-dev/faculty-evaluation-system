const openBtn = document.querySelector('#sidebar-open');
const closeIcon = document.querySelector('#sidebar-close');
const sidebarOverlay = document.querySelector('#sidebar-overlay');
const sidebar = document.querySelector('#sidebar');
const dropdownMenu = document.querySelector('#dropdownMenu');
const dropdown = document.querySelector('#dropdown');
const dropdownOverlay = document.querySelector('#dropdown-overlay');
let menuStatus = false;

function openSidebar() {
	sidebar.classList.remove('hidden');
	sidebarOverlay.classList.remove('hidden');
}
function closeSidebar() {
	sidebar.classList.add('hidden');
	sidebarOverlay.classList.add('hidden');
}

function dropdownMenuHandler() {
	if (menuStatus == false) {
		dropdown.classList.remove('hidden');
		dropdownOverlay.classList.remove('hidden');
		menuStatus = true;
	} else if (menuStatus == true) {
		dropdown.classList.add('hidden');
		dropdownOverlay.classList.add('hidden');
		menuStatus = false;
	}
}

dropdownMenu.addEventListener('click', () => {
	dropdownMenuHandler();
});

dropdownOverlay.onclick = () => {
	dropdownMenuHandler();
};

openBtn.onclick = openSidebar;
closeIcon.onclick = closeSidebar;
sidebarOverlay.onclick = closeSidebar;
