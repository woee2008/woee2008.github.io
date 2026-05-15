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

const dog = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const el = document.getElementById("code-block");
el.innerText = JSON.stringify(dog, undefined, 6);

const colorInput = document.getElementById("textbox");

const squareBox = document.querySelector('.Colorbox');

colorInput.addEventListener("change", function () {
    squareBox.style.backgroundColor = colorInput.value;
});