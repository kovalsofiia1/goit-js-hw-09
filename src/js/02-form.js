const ST_FORM_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form');
const message = form.querySelector('textarea');
const email = form.querySelector('input');
const toStorage = {}

const initialData = JSON.parse(localStorage.getItem(ST_FORM_KEY));

if (initialData) {
    console.log(initialData);
    toStorage.message = message.value = initialData.message;
    toStorage.email = email.value = initialData.email;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!message.value || !email.value) {
        alert("Fill all the fields!");
        return
    }
    console.log(toStorage);
    localStorage.removeItem(ST_FORM_KEY);
    form.reset();
    toStorage.email = '';
    toStorage.message = '';

})

form.addEventListener('input', (event) => {
    
    toStorage[event.target.name] = event.target.value.trim();
    localStorage.setItem(ST_FORM_KEY, JSON.stringify(toStorage));

});

