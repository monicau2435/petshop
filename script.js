document.addEventListener("DOMContentLoaded", function () {
    const authModal = document.getElementById("authModal");
    const signInBtn = document.createElement("button");
    const signUpBtn = document.createElement("button");

    signInBtn.className = "SignIn";
    signInBtn.textContent = "SignIn";
    signUpBtn.className = "Signup";
    signUpBtn.textContent = "Signup";

    const navDiv = document.querySelector(".nav > div");
    navDiv.appendChild(signInBtn);
    navDiv.appendChild(signUpBtn);

    const closeBtn = document.querySelector(".close-btn");
    const signInForm = document.getElementById("signinForm");
    const signUpForm = document.getElementById("signupForm");

    signInBtn.addEventListener("click", function () {
      signInForm.classList.remove("hidden");
      signUpForm.classList.add("hidden");
      authModal.style.display = "block";
    });

    signUpBtn.addEventListener("click", function () {
      signUpForm.classList.remove("hidden");
      signInForm.classList.add("hidden");
      authModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      authModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === authModal) {
        authModal.style.display = "none";
      }
    });
  });