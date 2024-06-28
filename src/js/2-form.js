const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;
const LS_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(LS_KEY)) ?? {
  email: '',
  message: '',
};

if (formData.email || formData.message) {
  email.value = formData.email;
  message.value = formData.message;
}

feedbackForm.addEventListener('input', saveFormState);
feedbackForm.addEventListener('submit', sendForm);

function saveFormState(event) {
  if (event.target.name === 'email') {
    formData.email = email.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = message.value.trim();
  } else {
    return;
    }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function sendForm(event) {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    formData.email = '';
    formData.message = '';
    feedbackForm.reset();
  } else {
    alert('Fill please all fields');
  }
}