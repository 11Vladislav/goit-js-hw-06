const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   alert("Please fill in all the fields!");
  }

  const inputData = {
    email: email.value,
    password: password.value,
  };

   console.log(inputData);
  event.currentTarget.reset();
}
