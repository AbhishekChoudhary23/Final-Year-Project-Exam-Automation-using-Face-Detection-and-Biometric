const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    document.body.classList.add("background-active"); // Add class to body
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    document.body.classList.remove("background-active"); // Remove class from body
});
