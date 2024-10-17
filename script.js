//your JS code here. If required.
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

if(localStorage.getItem('username')) {
	existingBtn.style.display = 'block';
}

submitBtn.addEventListener('click', () => {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const checkbox = document.getElementById('checkbox');

	if(checkbox.checked) {
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}
	else {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	alert(`Logged in as ${username}`);
});

existingBtn.addEventListener('click', () => {
	const username = localStorage.getItem('username');
	alert(`Logged in as ${username}`)
})