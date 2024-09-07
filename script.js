// RFC 5322
const validEmail = function(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
} 

const email = document.getElementById("email");
const emailError = document.getElementById("email-error")
email.addEventListener("blur", (event) => {
    if (!validEmail(email.value)) {
        emailError.classList.remove("hidden");
        email.classList.add("error");
    }
});

email.addEventListener("keydown", (event) => {
    if (validEmail(email.value)) {
        emailError.classList.add("hidden");
        email.classList.remove("error");
    }
});

email.addEventListener("keyup", (event) => {
    if (validEmail(email.value)) {
        emailError.classList.add("hidden");
        email.classList.remove("error");
    }
});

const country = document.getElementById("country");
const countryError = document.getElementById("country-error")
country.addEventListener("blur", (event) => {
    if (country.validity.valueMissing) {
        countryError.classList.remove("hidden");
        country.classList.add("error");
    }
});

country.addEventListener("keydown", (event) => {
    if (!country.validity.valueMissing) {
        countryError.classList.add("hidden");
        country.classList.remove("error");
    }
});

country.addEventListener("keyup", (event) => {
    if (!country.validity.valueMissing) {
        countryError.classList.add("hidden");
        country.classList.remove("error");
    }
});

const zipCode = document.getElementById("zip-code");
const zipCodeError = document.getElementById("zip-code-error")
zipCode.addEventListener("blur", (event) => {
    if (zipCode.validity.patternMismatch || zipCode.validity.valueMissing) {
        zipCodeError.classList.remove("hidden");
        zipCode.classList.add("error");
    }
});

zipCode.addEventListener("keydown", (event) => {
    if (!(zipCode.validity.patternMismatch || zipCode.validity.valueMissing)) {
        zipCodeError.classList.add("hidden");
        zipCode.classList.remove("error");
    }
});

zipCode.addEventListener("keyup", (event) => {
    if (!(zipCode.validity.patternMismatch || zipCode.validity.valueMissing)) {
        zipCodeError.classList.add("hidden");
        zipCode.classList.remove("error");
    }
});

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error")
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error")
password.addEventListener("blur", (event) => {
    if (password.validity.tooShort || password.validity.valueMissing) {
        passwordError.classList.remove("hidden");
        password.classList.add("error");
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.remove("hidden");
        confirmPassword.classList.add("error");
    }
});

password.addEventListener("keydown", (event) => {
    if (!(password.validity.tooShort || password.validity.valueMissing)) {
        passwordError.classList.add("hidden");
        password.classList.remove("error");
    }

    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.add("hidden");
        confirmPassword.classList.remove("error");
    }
});

password.addEventListener("keyup", (event) => {
    if (!(password.validity.tooShort || password.validity.valueMissing)) {
        passwordError.classList.add("hidden");
        password.classList.remove("error");
    }

    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.add("hidden");
        confirmPassword.classList.remove("error");
    }
});

confirmPassword.addEventListener("blur", (event) => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.remove("hidden");
        confirmPassword.classList.add("error");
    }
});

confirmPassword.addEventListener("keydown", (event) => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.add("hidden");
        confirmPassword.classList.remove("error");
    }
});

confirmPassword.addEventListener("keyup", (event) => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.add("hidden");
        confirmPassword.classList.remove("error");
    }
});
