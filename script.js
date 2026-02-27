// Form Elements
const submitButton = document.getElementById('submit-button');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Email Expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation Function
function validateForm() {
    const data = {};
    const errors = [];

    // FULL NAME
    if (fullnameInput.value.trim() !== '') {
        data.fullname = fullnameInput.value.trim();
    } else {
        errors.push('Full Name is required.');
    }

    // EMAIL 
    if (emailInput.value.trim() !== '') {
        if (emailRegex.test(emailInput.value.trim())) {
            data.email = emailInput.value.trim();
        } else {
            errors.push('Email is not valid.');
        }
    } else {
        erroers.push('Email is required.');
    }


    // MESSAGE 
    if (messageInput.value.trim() !== '') {
        data.message = messageInput.value.trim();
    } else {
        errors.push('Message is required.');
    }

    // FEEDBACK
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        fullnameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Register Click Event
submitButton.addEventListener('click', validateForm);
