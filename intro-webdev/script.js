const button = document.querySelector(".event-listener");
button.addEventListener("click", () => {
    alert("You clicked the button!");
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    if(toggleButton.textContent === 'Dark Mode') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Dark Mode';
    }
});