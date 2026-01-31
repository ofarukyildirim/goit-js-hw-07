const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasEmpty = [...inputs].some(input => input.value.trim() === "");

  if (hasEmpty) {
    alert("All form fields must be filled in");
    return;
  } else {
    const values = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(values);
    form.reset();
  }
});