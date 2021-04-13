const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usermail = document.getElementById("email").value;
  const alert = document.getElementById("alert");

  const isValid = emailRegex.test(usermail);

  if (!isValid) {
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 1000);
  }

  document.getElementById("email").value = "";
};

const notifyBtn = document.getElementById("notify__btn");
notifyBtn.addEventListener("click", validateEmail);
